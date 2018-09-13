import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
export default class MineMyCell extends Component<Props> {
    constructor(props) {
        super(props);
        this.state={
            leftIconName: '',
            leftTitle: '',
            rightIconName: '',
            rightTitle: ''
        }
    }


    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} style={styles.activeOpacity}>
            <View style={styles.container}>
                {/*--左边--*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIconName}}  style={styles.leftImgStyle}/>
                    <Text>{this.props.leftTitle}</Text>
                </View>
                {/*--右边--*/}
                <View style={styles.rightViewStyle}>
                    {this.rightSubView()}
                </View>
            </View>
        </TouchableOpacity>

        );
    }

 // 右边的内容
    rightSubView(){
        return(
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {this.renderRightContent()}
                {/*箭头*/}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
            </View>
        )
    }

    // 右边具体返回的值
    renderRightContent(){
        if(this.state.rightIconName.length == 0){ // 不返回图片
            return(
                <Text style={{color:'gray'}}>{this.state.rightTitle}</Text>
            )
        }else{
            return(
                <Image source={{uri: this.state.rightIconName}}  style={{width:24, height:13}}/>
            )
        }
    }



}

const styles = StyleSheet.create({
     container: {
    // 主轴的方向
         width:width * 0.9,
    flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 背景颜色
        backgroundColor:'white',
        // 垂直居中
        alignItems:'center',
        // 高度
        height:Platform.OS == 'ios' ? 60 : 56,
        borderRadius:15,
        // 下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,


},


leftViewStyle:{
    // 主轴的方向
    flexDirection:'row',
        // 侧轴居中
        alignItems:'center',
        // 左外边距
        marginLeft:8
},

rightViewStyle:{

},

leftImgStyle:{ // 左边的图片
    width:24,
        height:24,
        marginRight:6,
        // 圆角
        borderRadius:12
}
});

module.exports = MineMyCell;

