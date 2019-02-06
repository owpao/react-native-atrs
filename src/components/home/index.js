import React, { Component } from 'react';
import {Image} from 'react-native';
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
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body style={{ flex: 3, alignContent: 'center' }}>
                            <Image style={{ alignSelf:'center', width: 200, height: 35 }} source={require('assets/logo-header.png')} resizeMode="contain" />
                        </Body>
                        <Right style={{ flex: 1 }} />
                    </Header>

                    <MapView />
                    <View style={{ position: 'absolute', justifyContent: 'center', alignSelf: 'center', alignItems: "center", height: 80, width: '90%', top: 150 }}>
                        <Item rounded style={{ height: '50%', paddingHorizontal: 10, backgroundColor: '#f5f6fa', marginVertical: 5 }}>
                            <Icon style={{ color: '#e84118' }} name='place' type='MaterialIcons' />
                            <Input
                                placeholder='Pick-up point'
                                label='pickup'
                                onChangeText={this.props.onChangeOriginText}
                                value={this.props.route.origin}
                            />
                        </Item>

                        <Item rounded style={{ height: '50%', paddingHorizontal: 10, backgroundColor: '#f5f6fa' }}>
                            <Icon style={{ color: '#4cd137' }} name='place' type='MaterialIcons' />
                            <Input
                                placeholder='Destination'
                                label='destination'
                            />
                        </Item>

                    </View>


                </Container>

                <Button rounded style={{ position: 'absolute', flex: 1, alignSelf: 'center', bottom: 50 }}>
                    <Text>Set Pick up address</Text>
                </Button>
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