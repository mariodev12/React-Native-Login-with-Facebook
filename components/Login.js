import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

import { LoginManager } from 'react-native-fbsdk';

export default class Login extends Component {
    loginWithFacebook = () => {
        console.log('outside login manager')
        LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
            console.log(result)
            if(result.isCancelled) {
                console.log('Login cancelado')
            } else {
                console.log(`Login success ${result.grantedPermissions.toString()}`)
            }
        })
    }
    render(){
        return (
            <View>
                <TouchableHighlight onPress={this.loginWithFacebook}>
                    <Text>Login with Facebook</Text>
                </TouchableHighlight>
            </View>
        )
    }
}