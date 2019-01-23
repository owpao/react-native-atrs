import React, {Component} from 'react';
import { Image, ImageBackground } from 'react-native';
import {withNavigation} from 'react-navigation';
import {Content, List, ListItem, Icon, Left, Body, Text}
from 'native-base';


class Sidebar extends Component {
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
                        style={{height: 80, width: 70}}
                        source={{
                            uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/assets/logo.png"
                        }}
                    />
                </ImageBackground>
                <List>
                    <ListItem icon button onPress={()=>alert('Home')}>
                        <Left>
                            <Icon name="home" type="MaterialCommunityIcons"/>
                        </Left>
                        <Body>
                        <Text>Home</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon button onPress={()=>alert('My Profile')}>
                        <Left>
                            <Icon name="profile" type="AntDesign"/>
                        </Left>
                        <Body>
                        <Text>My Profile</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon button onPress={()=>alert('History')}>
                        <Left>
                            <Icon name="history" type="MaterialCommunityIcons"/>
                        </Left>
                        <Body>
                        <Text>History</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon button onPress={()=> this.props.navigation.navigate('Login')}>
                        <Left>
                            <Icon name="log-out" type="Feather"/>
                        </Left>
                        <Body>
                        <Text>Log Out</Text>
                        </Body>
                    </ListItem>
                </List>
            </Content>
        );
    }
}
export default withNavigation(Sidebar);