import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {getResult} from '../../api/reault';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';

const imgs = [
    {
        link: '',
        url: 'https://kano.guahao.cn/0Q932215648?resize=750-336'
    },
    {
        link: '',
        url: 'https://kano.guahao.cn/XXi32231185?resize=750-336'
    },
    {
        link: '',
        url: 'https://kano.guahao.cn/0Q932215648?resize=750-336'
    },
    {
        link: '',
        url: 'https://kano.guahao.cn/0Q932215648?resize=750-336'
    },
    {
        link: '',
        url: 'https://kano.guahao.cn/0Q932215648?resize=750-336'
    }
];

const apps = [
    {
        icon: 'https://static.guahao.cn/h5/img/components/index/before-health/mfzx.png?_t=151835614844bd20',
        name: '智能问诊',
        des: '实时极速响应'
    },
    {
        icon: 'https://static.guahao.cn/h5/img/components/index/before-health/zjwz.png?_t=151835614844bd20',
        name: '智能导诊',
        des: '实时极速响应'
    },
    {
        icon: 'https://static.guahao.cn/h5/img/components/index/before-health/jryz.png?_t=151835614844bd20',
        name: '智能预问诊',
        des: '实时极速响应'
    }
];

export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //
    // componentDidMount() {
    //     this.fetchData()
    // }
    //
    // fetchData() {
    //     getResult().then(res => {
    //         this.setState({
    //             result: JSON.stringify(res)
    //         })
    //     })
    // }

    _renderImages() {
        let list = imgs.map((item, index) => {
            return <Image style={styles.slide}
                          resizeMode='stretch'
                          key={index}
                          source={{uri: item.url}}>
            </Image>
        });
        return list

    }

    _renderApp() {
        return apps.map((item, index) => {
            return <View style={[styles.appItem, index !== 2 ? styles.appItemBorder : '']} key={index}>
                <Image resizeMode='stretch'
                       style={styles.appImg}
                       source={{uri: item.icon}}>
                </Image>
                <Text style={styles.appName}>{item.name}</Text>
                <Text style={styles.appDes}>{item.des}</Text>
            </View>
        })
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Swiper style={styles.wrapper}
                            height={168}
                            dot={<View style={styles.dot}/>}
                            activeDot={<View style={styles.dotAction}/>}
                            horizontal={true}
                            autoplay={true}
                            paginationStyle={{position: 'absolute', bottom: 10}}
                            showsButtons={false}>
                        {this._renderImages()}
                    </Swiper>
                </View>
                <View style={styles.apps}>
                    {this._renderApp()}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 5,
        height: 5,
        borderRadius: 4,
        margin: 3,
    },
    dotAction: {
        width: 8,
        height: 8,
        backgroundColor: '#007aff',
        borderRadius: 4
    },
    wrapper: {
        height: 336
    },
    slide: {
        flex: 1,
    },
    text: {
        flex: 1,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    apps: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ebecf1',
        borderStyle: 'solid'
    },
    appItem: {
        flex: 1,
        height: 123.5,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },
    appImg: {
        width: 30,
        height: 30,
    },
    appName: {
        fontSize: 12,
        color: '#28354c',
        fontWeight: '400',
        marginTop: 10,
        marginBottom: 10
    },
    appDes: {
        fontSize: 10,
        color: '#c4c6cf',
        fontWeight: '400'
    },
    appItemBorder: {
        borderRightWidth: 1,
        borderColor: '#ebecf1',
        borderStyle: 'solid'
    }
});
