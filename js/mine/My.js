import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View,ScrollView} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var MineHeader = require('./MineHeader');
var MineMyCell = require('./MineMyCell');
var MineMiddle = require('./MineMiddle');
type Props = {};
export default class My extends Component<Props> {
    render() {
        return (
           <ScrollView
            style={styles.scrollViewStyle}
            contentInset = {{top: -200}}
            contentOffset = {{y:200}}
            >

               <MineHeader />


               <View style={styles.container}>

                   <View style={styles.container}>
                       <MineMiddle/>
                   <MineMyCell
                       leftIconName="collect"
                       leftTitle="我的订单"
                       rightTitle="全部订单"
                   />

                   </View>


                   <MineMyCell
               leftIconName="collect"
               leftTitle="个人信息"
               rightTitle="查看全部订单"
                   />


               <MineMyCell
                   leftIconName="draft"
                   leftTitle="我的优惠券"
                   rightTitle="账户余额:¥100"
               />

               <MineMyCell
                   leftIconName="like"
                   leftTitle="常见问题"
                   rightTitle="10张"
               />

               <MineMyCell
                   leftIconName="like"
                   leftTitle="联系客服"
                   rightTitle="10张"
               />
               </View>
            </ScrollView>

        );


    }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       backgroundColor:'rgb(249, 243, 245)',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }

})

module.exports = My;

