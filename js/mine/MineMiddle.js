import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
type Props = {};

var MiddleData = require('./MiddleData.json');
export default class MineMiddle extends Component<Props> {
        constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>

        );


    }
 renderAllItem(){
        // 定义组件数组
        var itemArr = [];
        // 遍历
        for(var i=0; i<MiddleData.data.length; i++){
            // 取出单独的数据
            var badge = MiddleData.data[i];
            // 创建组件装入数组
            itemArr.push(
                //<InnerView key={i} iconName={data.iconName} title={data.title}/>


                <View style={styles.innerViewStyle}>
                    <Image source={{uri: badge.iconName}} style={{width:40, height:30,marginBottom:3}}/>
                    <Text>
                        {badge.title}
                    </Text>
                </View>

            );
        }
        // 返回
        return itemArr;
    }
}


 // 里面的组件类
// export default class InnerView extends Component<Props> {
//
//     constructor(props) {
//         super(props);
//         this.state={
//             iconName: '',
//             title:''
//         }
//     }
//
//
//
//
//     render(){
//         return(
//             <TouchableOpacity activeOpacity={0.5} >
//                 <View style={styles.innerViewStyle}>
//                     <Image source={{uri: this.state.iconName}} style={{width:40, height:30, marginBottom:3}}/>
//                     <Text style={{color:'gray'}}>{this.state.title}</Text>
//                 </View>
//             </TouchableOpacity>
//         );
//     }
// }

const styles = StyleSheet.create({
    container: {
        // 设置主轴的方向
        flexDirection:'row',
        padding:10,
        alignItems: 'center',
        backgroundColor: 'white',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    innerViewStyle:{
        // width:70,
        // height:70,
        flex:1,

        // 水平和垂直居中
        justifyContent:'center',
        alignItems:'center'
    }
});


module.exports = MineMiddle

