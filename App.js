/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabNavigator} from 'react-navigation';
import Popular from './src/pages/Popular'
import Trending from './src/pages/Trending'
import Favorate from './src/pages/Favorate'
import My from './src/pages/My'

const TabNav = TabNavigator({
    popular: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '流行',
            tabBarIcon: ({tintColor, focused}) => (
                focused ? <Icon name="home" size={22} color={tintColor}/> : <Icon name="home" size={22} color={tintColor}/>
            )
        }
    },
    trending: {
        screen: Trending,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
                focused ? <Icon name="home" size={22} color={tintColor}/> : <Icon name="home" size={22} color={tintColor}/>
            )
        }
    },
    favorate: {
        screen: Favorate,
        navigationOptions: {
            tabBarLabel: '流行',
            tabBarIcon: ({tintColor, focused}) => (
                focused ? <Icon name="home" size={22} color={tintColor}/> : <Icon name="home" size={22} color={tintColor}/>
            )
        }
    },
    my: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                focused ? <Icon name="home" size={22} color={tintColor}/> : <Icon name="home" size={22} color={tintColor}/>
            )
        }
    }
}, {
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#00a0ea',
        inactiveTintColor: '#999',
        showIcon: true,
        indicatorStyle: {
            height: 0
        },
        style: {
            backgroundColor: '#fff',
            height: 44,
        },
        labelStyle: {
            fontSize: 10, // 文字大小
            marginTop: 0
        },
        iconStyle: {
            height: 22,
            marginTop: 0,
        }
    },
});

export default class App extends Component {
    render() {
        return (
            <TabNav/>
        );
    }
}

const styles = StyleSheet.create({});
