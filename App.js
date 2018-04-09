/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Navigator from 'react-native-deprecated-custom-components';
import LoginPage from './js/LoginPage';
export default class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator}/>
        );
    }

    render() {
        return (
            <Navigator.Navigator
                initialRoute={{
                    name: 'LoginPage',
                    component:LoginPage
                }}
                renderScene={(e, i)=>this._renderScene(e, i)}
            />
        );
    }
}
