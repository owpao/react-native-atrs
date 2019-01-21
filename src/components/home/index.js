import React, { Component } from 'react';

import {
    Container, Header, Left, Button, Icon, Right, Body, Title, Drawer, Input, Item, InputGroup, Grid, Row, Col, Card, CardItem, Text, View
} from 'native-base';

import Sidebar from 'components/sidebar';
import { Styles } from 'constants/styles';
import MapView from 'components/map';

export default class Home extends Component {
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
                    <MapView />
                </Container>
            </Drawer>
        );
    }
}

module.exports = Home;