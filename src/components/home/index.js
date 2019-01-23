import React, { Component } from 'react';

import {
    Container, Header, Left, Button, Icon, Right, Body, Title, Drawer, Input, Item, View
} from 'native-base';

import Sidebar from 'components/sidebar';
import { Styles } from 'constants/styles';
import MapView from 'components/map';

export default class Home extends Component {

    state = {
        route : {
            origin:"",
            destination:""
        }
    };

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => {
                    this.drawer = ref;
                }}
                content={<Sidebar />}
                onClose={() => this.closeDrawer()}>

                <Container>
                    <Header style={Styles.statusBar} />
                    <Header style={{ backgroundColor: "#212121" }}>
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>ATRS</Title>
                        </Body>
                        <Right />
                    </Header>
                    
                    <View style={{ alignContent: "center", justifyContent: "space-evenly", alignItems: "center", height: 100 }}>
                    <Item style={{ height: '50%', paddingHorizontal: 10, backgroundColor: '#f5f6fa' }}>
                        <Icon style={{ color: '#e84118' }} name='place' type='MaterialIcons' />
                        <Input
                            placeholder='Pick-up point'
                            label='pickup'
                            value = {this.state.route.origin}
                        />
                    </Item>

                    <Item style={{ height: '50%', paddingHorizontal: 10, backgroundColor: '#f5f6fa' }}>
                        <Icon style={{ color: '#4cd137' }} name='place' type='MaterialIcons' />
                        <Input
                            placeholder='Destination'
                            label='destination'
                            value = {this.state.route.destination}
                        />
                    </Item>
                </View>
                    <MapView />
                </Container>
            </Drawer>
        );
    }
}

module.exports = Home;