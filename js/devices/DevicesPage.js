import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ListView,
    RefreshControl,
    TouchableOpacity,
    NativeModules,
} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class DevicesPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            success: null,
            data: [],
            showLoading: false,
            searchTxt: '',
        }
        this.offset = 0;
        this.pageSize = 25;
        this.dataCount = 0;
        this.data = [];
        this.deviceStatus = '';
        this.isLoad=false;
    }

    componentDidMount() {
        this.loadData(true)
    }

    loadData(shouldShowLoading) {
        let _that = this;
        _that.isLoad=true;
        // if (_that.state.searchTxt.length != 0) {
        //     this.doSearch();
        //     return;
        // }

        if (shouldShowLoading) {
            _that.setState({
                showLoading: true
            });
        }
        NativeModules.netModule.log("loadData", "_that.offset" + _that.offset)

        NativeModules.netModule.loadDevices(_that.offset, _that.pageSize, _that.state.searchTxt, _that.deviceStatus).then((response) => {
            _that.isLoad=false;
            var responseData = JSON.parse(response)
            NativeModules.netModule.log("loadData", "responseData.count=" + responseData.count);
            NativeModules.netModule.log("loadData", "responseData.devices.length=" + responseData.devices.length);
            this.dataCount = responseData.count;
            NativeModules.netModule.log("loadData", "this.offset=" + this.offset);
            this.offset = this.offset + responseData.devices.length;
            NativeModules.netModule.log("loadData", "after plus this.offset" + this.offset);
            this.data = this.data.concat(responseData.devices);
            _that.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.data),
                showLoading: false,
            })
        }).catch((error) => {
            _that.isLoad=false;
            alert(error)
            _that.setState({
                showLoading: false,
            })

        });
    }

    onItemClick(url) {
        // this.props.navigator.push({
        // })
    }

    getSearchTxt(txt) {
        this.setState({
            searchTxt: txt,
        })
    }

    doSearch() {
        this.offset = 0;
        this.data = [];
        this.loadData(true)

    }

    _renderRow(obj,sectionID,rowID) {
        let apps=[];
        for(var i in obj.applications){
            var text=(
                <Text key={i} numberOfLines={1} style={{fontSize: 12, marginTop: 5}}>
                    {decodeURI(obj.applications[i].name)+":"+obj.applications[i].version}
                </Text>
            );
            apps.push(text)
        }

        return (
            <TouchableOpacity onPress={() => {
                this.onItemClick("TODO")
            }}>
                <View style={[{flex: 1, flexDirection: 'row', padding: 5}, styles.card]} key={obj.id}>
                    <View style={{flex: 1, paddingLeft: 5}}>
                        <Text style={{fontSize: 16}}
                              numberOfLines={1}>{(parseInt(rowID)+1)+"/" + this.dataCount + "---设备:" + obj.name}</Text>
                        <Text style={{fontSize: 12, marginTop: 5}}>{"IMEI:" + obj.properties[2].value}</Text>
                        <Text style={{fontSize: 8, marginTop: 5}}>{obj.enrolmentInfo.status}</Text>{apps}</View>
                    <Image style={{width: 4, height: 4, resizeMode: 'center'}}
                           source={require('../../res/imgs/ic_no_pic.png')}/>
                </View>
            </TouchableOpacity>
        )
    }

    _onSelect(index, value) {
        this.deviceStatus = value;
        this.offset = 0;
        this.data = [];
        this.loadData(true)
    }

    render() {
        let radioGroupView = <View>
            <RadioGroup
                onSelect={(index, value) => this._onSelect(index, value)}
                style={{flexDirection: 'row', flexWrap: 'wrap'}}
                selectedIndex={0}
            >
                <RadioButton value={''}>
                    <Text>全部</Text>
                </RadioButton>

                <RadioButton value={'ACTIVE'}>
                    <Text>在线</Text>
                </RadioButton>

                <RadioButton value={'UNREACHABLE'}>
                    <Text>失联</Text>
                </RadioButton>
                <RadioButton value={'INACTIVE'}>
                    <Text>离线</Text>
                </RadioButton>
                <RadioButton value={'REMOVED'}>
                    <Text>移除</Text>
                </RadioButton>
            </RadioGroup>

        </View>


        let searchView = <View
            style={{flexDirection: 'row', height: 50, backgroundColor: 'blue', padding: 5, alignItems: 'center'}}>
            <TextInput style={{
                flex: 1,
                marginLeft: 5,
                marginRight: 5,
                paddingLeft: 5,
                borderRadius: 4,
                backgroundColor: 'white',
            }} placeholder='请输入想要搜索的内容' numberOfLines={1} underlineColorAndroid="transparent"
                       value={this.state.searchTxt} onChangeText={this.getSearchTxt.bind(this)}/>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
                <Text style={{fontSize: 20, color: 'white'}} onPress={this.doSearch.bind(this)}>搜索</Text>
            </View>
        </View>

        let listView = <View style={{minHeight: 70}}><ListView
            dataSource={this.state.dataSource}
            enableEmptySections={true}
            renderRow={(data,sectionID,rowID) => this._renderRow(data,sectionID,rowID)}
            onEndReached={() => {
                NativeModules.netModule.log("onEndReached", "offset=" + this.offset + "--dataCount=" + this.dataCount)
                if (this.offset < this.dataCount) {
                    NativeModules.netModule.log("onEndReached", "this.offset=" + this.offset + "--this.dataCount=" + this.dataCount)
                    if(!_that.isLoad)
                        this.loadData()
                }
            }}
            onEndReachedThreshold={50}
            refreshControl={
                <RefreshControl
                    refreshing={this.state.showLoading}
                    onRefresh={() => {
                        this.offset = 0;
                        this.data = [];
                        this.loadData()
                    }}
                    colors={['blue']}
                    tintColor={'blue'}
                    titleColor={'blue'}
                    title={'Loading'}
                />}
        /></View>
        let emptyView = this.data.length === 0 ?
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Image
                source={require('../../res/imgs/ic_nodata.png')}
                style={{width: 200, height: 200,}}/><Text>暂时没有数据呐！</Text></View> : null;
        return (
            <View style={{flex: 1, marginBottom: 150}}>
                {searchView}
                {radioGroupView}
                {listView}
                {emptyView}
            </View>
        )
    }

}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 4,
        marginLeft: 6,
        marginRight: 6,
        marginVertical: 2,
        borderWidth: 0.3,
        borderColor: '#dddddd',
        borderRadius: 1,
        //iOS的阴影
        shadowColor: '#b5b5b5',
        shadowOffset: {width: 3, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        //Android的阴影
        elevation: 2
    }
})