/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'

export default class FourPage_four extends Component {

    render() {
        return (
            <View style={FourPage_fourStyle.ViewStyle}>

                <Text style={FourPage_fourStyle.textStyle}>
                    第四个item的第四个页面
                </Text>
            </View>
        );
    }
}
const FourPage_fourStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffe121',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('myTabBarAndNavigationTest', () => FourPage_four);
