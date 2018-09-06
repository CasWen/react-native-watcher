import React,{Component} from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    RefreshControl

} from 'react-native';

type Props = {};
const CITY_MAMES = ["北京","上海","武汉","郑州","杭州"];
export default class FlatListDemo extends Component<Props>{
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            dataArray:CITY_MAMES
        }
    }

    loadData(){
        this.setState({
            isLoading:true
        });
        setTimeout(() =>{

            let dataArray = [];
            for (let i=this.state.dataArray.length-1;i>0;i--){

                dataArray.push(this.state.dataArray[i]);
            }
            this.setState({
                dataArray:dataArray,
                isLoading:false,
            })
        },2000);
    }

    _renderItem(data){
        return <View style={styles.item}>
            <Text syle ={styles.text}>{data.item}

            </Text>
        </View>
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatListDemo
                data = {this.state.dataArray}
                renderItem = {(data) => this._renderItem(data)}
                refreshing = {this.state.isLoading}
                onRefresh={()=>{
                    this.loadData();
                }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    item:{
        backgroundColor:"red",
        height:200,
        marginRight:15,
        marginLeft:15,
        marginBottom:15,
        alignItems:"center"
    },
    text:{
        color:"white",
        fontSize:20,
    }
})