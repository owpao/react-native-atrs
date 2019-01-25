import React, { Component } from 'react';

import {
    Container, Header, Left, Button, Icon, Right, Body, Title, Drawer, Input, Item, View, Text
} from 'native-base';

import Sidebar from 'components/sidebar';
import { Styles } from 'constants/styles';
import MapView from 'components/map';
import { connect } from 'react-redux';
import { changeOriginValue } from 'constants/actions'
class Home extends Component {

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    onPressTest = () => {
        console.log(this.props.route);
    }

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
                                onChangeText={this.props.onChangeOriginText}
                                value = {this.props.route.origin}
                            />
                        </Item>

                        <Item style={{ height: '50%', paddingHorizontal: 10, backgroundColor: '#f5f6fa' }}>
                            <Icon style={{ color: '#4cd137' }} name='place' type='MaterialIcons' />
                            <Input
                                placeholder='Destination'
                                label='destination'
                            />
                        </Item>


                    </View>
                    <MapView />
                    {/* <Button block onPress = {this.onPressTest.bind(this)} >
                            <Text>test</Text>
                            </Button> */}
                </Container>
            </Drawer>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeOriginText: (text) => { dispatch(changeOriginValue(text)) }
    }
}

const mapStateToProps = state => {
    return {
        route: state.home.route
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);