import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    YellowBox,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import DevicesPage from './devices/DevicesPage'
import AppPage from './application/AppPage'
import MinePage from './mine/MinePage'
import ActivePage from './active/ActivePage'
import MineMyCell from "./mine/MineMyCell";
import My from "./mine/My";

//需要导出的常量
export const FLAG_TAB = {
    flag_DevicesTab: 'flag_DevicesTab',
    flag_AppTab: 'flag_AppTab',
    flag_ActiveTab: 'flag_ActiveTab',
    flag_MineTab: 'flag_MineTab'
}

export default class HomePage extends Component {

    constructor(props) {

        super(props);
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
        let selectedTab = this.props.selectedTab ? this.props.selectedTab : FLAG_TAB.flag_DevicesTab;
        this.state = {
            selectedTab: selectedTab,
        }

    }

    onSelected(selectedTab) {
        this.setState({
            selectedTab: selectedTab,
        })
    }


    _renderTab(Component, selectedTab, title, renderIcon) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderIcon={() => <Image style={styles.tabItemImageStyle}
                                         source={renderIcon}/>}
                renderSelectedIcon={() => <Image
                    style={[styles.tabItemImageStyle,styles.tabSelectedStyle]}
                    source={renderIcon}/>}
                onPress={() => this.onSelected(selectedTab)}>
                <Component {...this.props}/>
            </TabNavigator.Item>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <TabNavigator
                    tabBarStyle={{opacity: 0.9,}}
                    sceneStyle={{paddingBottom: 0}}
                >
                    {this._renderTab(DevicesPage, FLAG_TAB.flag_DevicesTab, '设备', require('../res/imgs/ic_trending.png'))}
                    {this._renderTab(AppPage, FLAG_TAB.flag_AppTab, '应用', require('../res/imgs/ic_trending.png'))}
                    {this._renderTab(ActivePage, FLAG_TAB.flag_ActiveTab, '在线', require('../res/imgs/ic_news.png'))}
                    {this._renderTab(My, FLAG_TAB.flag_MineTab, '我的', require('../res/imgs/ic_my.png'))}


                </TabNavigator>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    tabItemImageStyle: {
        width: 24,
        height: 24,
    },
    tabSelectedStyle: {
        tintColor:'blue'
    },
    selectedTitleStyle:{
        color:'blue'
    }
});