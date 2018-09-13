
import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var Home = require('../Home/XMGHome');
// var XMGHome = require('../Home/XMGHomeshou');
// var TabQie = require('../Home/TabQie');
// var ShopChart = require('../Shop/ShopChart');

 var Shop = require('../Shop/XMGShop');
var Mine = require('../Mine/XMGMine');
var More = require('../More/XMGMore');
var Animate = require('../Animate/Animate');
var My = require('../Mine/My');
import ShopChart from '../Shop/ShopChart';
import FenLei from '../FenLei/FenLei';
// import TabQie from '../Home/TabQie';
type Props = {};
export default class XMGMain extends Component<Props> {
    constructor(props) {
        super(props);
        this.state={
            selectedTab:'home'
        }
    }
    render() {
        return (

            <TabNavigator>
                {/*<TabNavigator.Item*/}
                    {/*title="首"*/}
                    {/*renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}*/}
                    {/*renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}*/}
                    {/*onPress={() => {this.setState({ selectedTab: 'tabqie' })}}*/}
                    {/*selected={this.state.selectedTab === 'tabqie'}*/}
                {/*>*/}
                    {/*/!*<Home/>*!/*/}
                    {/*<Navigator*/}
                        {/*initialRoute={{name:'首1',component:TabQie}}*/}
                        {/*configureScene={()=>{// 过渡动画*/}
                            {/*return Navigator.SceneConfigs.PushFromRight;*/}
                        {/*}}*/}
                        {/*renderScene={(route,navigator)=>{*/}
                            {/*let Component = route.component;*/}
                            {/*return <Component {...route.passProps} navigator={navigator}/>;*/}
                        {/*}}*/}
                    {/*/>*/}

                {/*</TabNavigator.Item>*/}

                {/*<TabNavigator.Item*/}
                    {/*title="首"*/}
                    {/*renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}*/}
                    {/*renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}*/}
                    {/*onPress={() => {this.setState({ selectedTab: 'fenlei' })}}*/}
                    {/*selected={this.state.selectedTab === 'fenlei'}*/}
                {/*>*/}
                    {/*/!*<Home/>*!/*/}
                    {/*<Navigator*/}
                        {/*initialRoute={{name:'首1',component:FenLei}}*/}
                        {/*configureScene={()=>{// 过渡动画*/}
                            {/*return Navigator.SceneConfigs.PushFromRight;*/}
                        {/*}}*/}
                        {/*renderScene={(route,navigator)=>{*/}
                            {/*let Component = route.component;*/}
                            {/*return <Component {...route.passProps} navigator={navigator}/>;*/}
                        {/*}}*/}
                    {/*/>*/}

                {/*</TabNavigator.Item>*/}


                {/*<TabNavigator.Item*/}
                    {/*title="首"*/}
                    {/*renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}*/}
                    {/*renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}*/}
                    {/*onPress={() => {this.setState({ selectedTab: 'xmghome' })}}*/}
                    {/*selected={this.state.selectedTab === 'xmghome'}*/}
                {/*>*/}
                    {/*/!*<Home/>*!/*/}
                    {/*<Navigator*/}
                        {/*initialRoute={{name:'首1',component:XMGHome}}*/}
                        {/*configureScene={()=>{// 过渡动画*/}
                            {/*return Navigator.SceneConfigs.PushFromRight;*/}
                        {/*}}*/}
                        {/*renderScene={(route,navigator)=>{*/}
                            {/*let Component = route.component;*/}
                            {/*return <Component {...route.passProps} navigator={navigator}/>;*/}
                        {/*}}*/}
                    {/*/>*/}

                {/*</TabNavigator.Item>*/}

                <TabNavigator.Item
                    title="购物车"
                    renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}
                    onPress={() => {this.setState({ selectedTab: 'shopchart' })}}
                    selected={this.state.selectedTab === 'shopchart'}
                >
                    {/*<ShopChart/>*/}

                    {/*<Home/>*/}
                    <Navigator
                        initialRoute={{name:'首1',component:ShopChart}}
                        configureScene={()=>{// 过渡动画
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />

                </TabNavigator.Item>



                <TabNavigator.Item
                    title="首"
                    renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}
                    onPress={() => {this.setState({ selectedTab: 'home' })}}
                    selected={this.state.selectedTab === 'home'}
                >
                    {/*<Home/>*/}
                    <Navigator
                        initialRoute={{name:'首1',component:Home}}
                        configureScene={()=>{// 过渡动画
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />

                </TabNavigator.Item>


                <TabNavigator.Item
                    title="首"
                    renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}
                    onPress={() => {this.setState({ selectedTab: 'home' })}}
                    selected={this.state.selectedTab === 'home'}
                >
                    {/*<Home/>*/}
                    <Navigator
                    initialRoute={{name:'首1',component:Home}}
                    configureScene={()=>{// 过渡动画
                    return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                    />

                </TabNavigator.Item>
                <TabNavigator.Item
                    title="商家"
                    renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}
                    onPress={() => {this.setState({ selectedTab: 'shop' })}}
                    selected={this.state.selectedTab === 'shop'}
                >
                    {/*<Shop/>*/}

                    <Navigator
                    initialRoute={{name:'商家',component:Shop}}
                    configureScene={()=>{// 过渡动画
                    return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                    />
                </TabNavigator.Item>


                <TabNavigator.Item
                    title="我的"
                    renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}
                    onPress={() => {this.setState({ selectedTab: 'mine' })}}
                    selected={this.state.selectedTab === 'mine'}
                >
                    {/*<Mine/>*/}
                    <Navigator
                        initialRoute={{name:'我',component:Mine}}
                        configureScene={()=>{// 过渡动画
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>


                <TabNavigator.Item
                    title="更多"
                    renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}
                    onPress={() => {this.setState({ selectedTab: 'more' })}}
                    selected={this.state.selectedTab === 'more'}
                >
                    {/*<More/>*/}
                    <Navigator
                    initialRoute={{name:'更多',component:More}}
                    configureScene={()=>{// 过渡动画
                    return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                    />
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="动画"
                    renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}
                    onPress={() => {this.setState({ selectedTab: 'animate' })}}
                    selected={this.state.selectedTab === 'animate'}
                >
                    {/*<More/>*/}
                    <Navigator
                        initialRoute={{name:'动画',component:Animate}}
                        configureScene={()=>{// 过渡动画
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="我的"
                    renderIcon={()=><Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}
                    onPress={() => {this.setState({ selectedTab: 'my' })}}
                    selected={this.state.selectedTab === 'my'}
                >
                    {/*<Mine/>*/}
                    <Navigator
                        initialRoute={{name:'我',component:My}}
                        configureScene={()=>{// 过渡动画
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>








            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle:{
        width: Platform.OS ==='ios' ? 30 : 25,
        height:Platform.OS ==='ios' ? 30 : 25,
    },

    selectedTitleStyle:{
        color:'orange'
    }
});