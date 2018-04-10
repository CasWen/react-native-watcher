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

export default class DevicesPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            success: null,
            data: [],
            isLoading: false,
            searchTxt: '',

        }
        this.loadData();
    }

    componentDidMount() {
        this.loadData(true)
    }

    loadData(shouldShowLoading) {
        let _that = this;
        if (_that.state.searchTxt.length != 0) {
            this.doSearch();
            return;
        }

        if (shouldShowLoading) {
            _that.setState({
                isLoading: true
            });
        }
        NativeModules.netModule.loadDevices(0,25,"","").then((response) =>
            JSON.parse(response)

        ).catch((error) => {
            alert("catch" + error)
        }).then((responseData) => {
            if (responseData === 'response is not json') {
                _that.setState({
                    isLoading: false,
                })
                return
            }
            _that.setState({
                data:responseData.devices,
                dataSource: this.state.dataSource.cloneWithRows(responseData.devices),
                isLoading: false,
            })

        })
            .catch((error) => {
                alert('error:' + error)
                _that.setState({
                    isLoading: false,
                })

            });



        // let timestamp = Date.parse(new Date());
        // var m = "c10c6e8165154e52aea8d3750c6cda5b" + timestamp + "SURDaAqDJRgkDCHG";
        // let signature = MD5.hex_md5(m);
        // fetch('http://api.xinwen.cn/news/hot?size=100&access_key=SURDaAqDJRgkDCHG&signature=' + signature + '&timestamp=' + timestamp, {
        //     method: 'GET'
        // })
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //         _that.setState({
        //             success: responseData.success,
        //             data: responseData.data.news,
        //             dataSource: this.state.dataSource.cloneWithRows(responseData.data.news),
        //             isLoading: false,
        //         });
        //     })
        //     .catch((error) => {
        //         alert(error)
        //         _that.setState({
        //             isLoading: false,
        //         })
        //     });
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

    }

    _renderRow(obj) {
        return (
            <TouchableOpacity onPress={() => {
                this.onItemClick("TODO")
            }}>
                <View style={[{flex: 1, flexDirection: 'row', padding: 5}, styles.card]} key={obj.id}>
                    <View style={{flex: 1, paddingLeft: 5}}>
                        <Text style={{fontSize: 16}} numberOfLines={1}>{obj.properties[2].value}</Text>
                        <Text style={{fontSize: 8, marginTop: 5}}>{obj.enrolmentInfo.status}</Text></View>
                    <Image style={{width: 40, height: 40, resizeMode: 'center'}}
                           source={require('../../res/imgs/ic_no_pic.png')}/>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
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
            <View style={{alignItems:'center',justifyContent:'center',}}>
                <Text style={{fontSize:20,color:'white' }} onPress={this.doSearch.bind(this)}>搜索</Text>
            </View>
        </View>

        let listView = <View><ListView
            dataSource={this.state.dataSource}
            enableEmptySections={true}
            renderRow={(data) => this._renderRow(data)}
            refreshControl={
                <RefreshControl
                    refreshing={this.state.isLoading}
                    onRefresh={() => this.loadData()}
                    colors={['blue']}
                    tintColor={'blue'}
                    titleColor={'blue'}
                    title={'Loading'}
                />}
        /></View>
        let emptyView = this.state.data.length === 0 ? <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Image source={require('../../res/imgs/ic_nodata.png')} style={{width:200,height:200,}}/><Text>暂时没有数据呐！</Text></View> : null;
        return (
            <View style={{flex: 1}}>
                {searchView}
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