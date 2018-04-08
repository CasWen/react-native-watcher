/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    NativeModules,
} from 'react-native';

//屏幕尺寸
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pwd: '',
            response: '',
            client_secret: '',
            client_id: '',
            token: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
              <Image source={{uri: 'https://vczero.github.io/ctrip/guo_1.jpg'}} style={styles.headerImage}/>
              <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle} value={this.state.vall}
                         onChangeText={this.getName.bind(this)}/>
              <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputStyle} value={this.state.vall}
                         onChangeText={this.getPwd.bind(this)}/>
              <TouchableOpacity style={styles.loginBtnStyle} onPress={this.login.bind(this)}>
                <Text style={{color: 'white'}}>登录</Text></TouchableOpacity>
              <View style={styles.settingStyle}>
                <Text onPress={this.forgetPwd.bind(this)}>忘记密码</Text>
                <Text onPress={this.signIn.bind(this)}>注册</Text>
              </View>
              <Text>{this.state.response}</Text>
                {/*<View style={styles.otherLoginStyle}>*/}
                {/*<Text>其他登录方式:</Text>*/}
                {/*<Image source={{uri: 'https://vczero.github.io/ctrip/guo_2.jpg'}}*/}
                {/*style={styles.otherLoginImageStyle}/>*/}
                {/*<Image source={{uri: 'https://vczero.github.io/ctrip/guo_3.jpg'}}*/}
                {/*style={styles.otherLoginImageStyle}/>*/}
                {/*<Image source={{uri: 'https://vczero.github.io/ctrip/guo_4.jpg'}}*/}
                {/*style={styles.otherLoginImageStyle}/>*/}
                {/*</View>*/}
            </View>
        )
    }

    getName(txt) {
        this.setState({
            name: txt,
        })
    }

    getPwd(txt) {
        this.setState({
            pwd: txt,
        })

    }

    login() {
        if (this.state.name.length == 0) {
            alert('请输入用户名')
            return
        }
        if (this.state.pwd.length == 0) {
            alert('请输入密码')
            return
        }
        NativeModules.netModule.login(this.state.name,this.state.pwd).then((response) =>{
            return JSON.parse(response);
            }

        ).catch((error)=>{
            alert("catch"+error)
        }).then((responseData) => {
            alert("responseDataJSON"+responseData.client_id)
            this.setState({
                response: JSON.stringify(responseData),
                client_secret: responseData.client_secret,
                client_id: responseData.client_id,
            })
            if(responseData==='response is not json'){
                return
            }
            // this.getToken();
        })
            .catch((error) => {
                // alert('error:000' + error)

            });



        // fetch('http://wso2dev.hollywant.com:8280/api-application-registration/register', {
        //     method: 'POST',
        //     headers: {
        //         'User-Agent': 'Mozilla/5.0(compatible),Android',
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Basic ' + str,
        //     },
        //     body: JSON.stringify({
        //         applicationName: "cdmf_android_111111111111111",
        //         consumerKey: null,
        //         consumerSecret: null,
        //         tags: ["android"],
        //         isAllowedToAllDomains: false,
        //         isMappingAnExistingOAuthApp: false,
        //         allowedToAllDomains: false,
        //         mappingAnExistingOAuthApp: false,
        //     })
        // }).then(response => {
        //         if (response.ok) {//true
        //             // alert(response.status)//200,201
        //             return response.json()
        //         } else {
        //             alert(response.status)
        //             return 'response is not json'
        //         }
        //     }
        // )
        //     .then((responseData) => {
        //         this.setState({
        //             response: JSON.stringify(responseData),
        //             client_secret: responseData.client_secret,
        //             client_id: responseData.client_id,
        //         })
        //         if(responseData==='response is not json'){
        //             return
        //         }
        //         this.getToken();
        //     })
        //     .catch((error) => {
        //         alert('error:' + error)
        //
        //     });

    }

    forgetPwd() {
        alert('忘记密码')
    }

    signIn() {
        alert('注册')
    }

    getToken() {
        var codeStr = this.state.client_id + ":" + this.state.client_secret;
        var AuthorizationStr = new Base64().encode(codeStr);
        fetch('http://wso2dev.hollywant.com:8280/token?username=admin&password=admin&grant_type=password', {
            method: 'POST',
            headers: {
                'User-Agent': 'Mozilla/5.0(compatible),Android',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + AuthorizationStr,
            },

        }).then(response =>

            response.json()
        )
            .then((responseData) => {

                this.setState({
                    response: JSON.stringify(responseData),
                })

            })
            .catch((error) => {
                alert('error:' + error)

            });
    }


}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#f9ffff',
    },
    headerImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'orange',
        marginTop: 50,
        marginBottom: 40,
    },
    textInputStyle: {
        height: 40,
        width: width * 0.8,
        backgroundColor: 'white',
        marginBottom: 2,
        textAlign: 'center',
    },
    loginBtnStyle: {
        height: 35,
        width: width * 0.8,
        backgroundColor: 'green',
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingStyle: {
        width: width * 0.8,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    otherLoginStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 80,
    },
    otherLoginImageStyle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 8,
    }

});