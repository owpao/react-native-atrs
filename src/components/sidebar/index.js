import React, {Component} from 'react';
import {
    Text, Image, ImageBackground
} from 'react-native';

import {Content, List, ListItem } from 'native-base';
const routes = ["Home", "Chat", "Profile"];

export default class Sidebar extends Component {
    render() {
        return (
            <Content style={{backgroundColor: '#FFFFFF'}}>
                <ImageBackground
                    source={{
                        uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/assets/drawer-cover.png"
                    }}
                    style={{
                        height: 150,
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Image
                        square
                        style={{ height: 80, width: 70 }}
                        source={{
                            uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/assets/logo.png"
                        }}
                    />
                </ImageBackground>
                <List
                    dataArray={routes}
                    renderRow={data => {
                        return (
                            <ListItem
                                button
                                onPress={() => this.props.navigation.navigate(data)}>
                                <Text>{data}</Text>
                            </ListItem>
                        );
                    }}
                />
            </Content>
        );
    }
}

module.exports = Sidebar;