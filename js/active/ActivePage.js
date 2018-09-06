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

export default class ActivePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            success: null,
            showLoading: false,
            searchTxt: '',
        }
        this.offset = 0;
        this.pageSize = 25;
        this.dataCount = 0;
        this.data = [];
        this.deviceStatus = 'ACTIVE';
        this.isLoad = false;
        this.listLength = 0;
    }

    componentDidMount() {
        this.loadData(true)
    }

    loadData(shouldShowLoading) {
        let _that = this;
        _that.isLoad = true;
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
            _that.isLoad = false;
            var responseData = JSON.parse(response)
            NativeModules.netModule.log("loadData", "responseData.count=" + responseData.count);
            NativeModules.netModule.log("loadData", "responseData.devices.length=" + responseData.devices.length);
            this.dataCount = responseData.count;
            NativeModules.netModule.log("loadData", "this.offset=" + this.offset);
            this.offset = this.offset + responseData.devices.length;
            NativeModules.netModule.log("loadData", "after plus this.offset" + this.offset);
            this.data = this.data.concat(responseData.devices);
            this.listLength = this.data.length;
            _that.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.data),
                showLoading: false,
            })
        }).catch((error) => {
            _that.isLoad = false;
            alert(error)
            _that.setState({
                showLoading: false,
            })

        });
    }

    onItemClick(url) {
        // this.props.navigator.push({
        // })
        alert("暂时不能跳转")
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

    _renderRow(obj, sectionID, rowID) {
        let apps = [];
        for (var i in obj.applications) {
            var text = (
                <Text key={i} numberOfLines={1} style={{fontSize: 12, marginTop: 5}}>
                    {decodeURI(obj.applications[i].name) + ":" + obj.applications[i].version}
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
                              numberOfLines={1}>{"IMEI:" + obj.properties[2].value + "   " + obj.enrolmentInfo.status + "   " + (parseInt(rowID) + 1) + "/" + this.dataCount}</Text>
                        {apps}</View>
                    <Image style={{width: 4, height: 4, resizeMode: 'center'}}
                           source={require('../../res/imgs/ic_no_pic.png')}/>
                </View>
            </TouchableOpacity>
        )
    }

    _onSelect(index, value) {
        this.deviceStatus = "ACTIVE";
        this.offset = 0;
        this.data = [];
        this.loadData(true)
    }

    render() {

        let listView = <View style={{minHeight: 70}}><ListView
            dataSource={this.state.dataSource}
            enableEmptySections={true}
            renderRow={(data, sectionID, rowID) => this._renderRow(data, sectionID, rowID)}
            onEndReached={() => {
                NativeModules.netModule.log("onEndReached", "offset=" + this.offset + "--dataCount=" + this.dataCount)
                if (this.offset < this.dataCount) {
                    NativeModules.netModule.log("onEndReached", "this.offset=" + this.offset + "--this.dataCount=" + this.dataCount)
                    if (!this.isLoad)
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
        let emptyView = this.listLength === 0 ?
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                source={require('../../res/imgs/ic_nodata.png')}
                style={{width: 200, height: 200}}/><Text>暂时没有数据！</Text></View> : null;
        return (
            <View style={{flex: 1, marginBottom: 10}}>

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