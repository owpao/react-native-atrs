import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    Container, Header, Left, Button, Icon, Right, Body, Title, Drawer, Input, Item, View, Text
} from 'native-base';

import Sidebar from 'components/sidebar';
import { Styles as styles } from './homeStyles';
import MapView from 'components/map';
import { connect } from 'react-redux';
import { changeOriginValue } from 'constants/actions'
import { changeDestinationValue, originLocationDone } from '../../constants/actions';
class Home extends Component {

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
                    <Header style={styles.statusBar} />
                    <Header style={{ backgroundColor: "#212121" }}>
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body style={{ flex: 3, alignContent: 'center' }}>
                            <Image style={styles.headerImage} source={require('assets/logo-header.png')} resizeMode="contain" />
                        </Body>
                        <Right style={{ flex: 1 }} />
                    </Header>

                    <MapView />
                    <View style={styles.view}>
                        <Item rounded style={styles.roundedTextBox}>
                            <Icon style={{ color: '#e84118' }} name='place' type='MaterialIcons' />
                            <Input
                                placeholder='Pick-up point'
                                label='pickup'
                                onChangeText={this.props.onChangeOriginText}
                                value={this.props.route.origin}
                            />
                        </Item>

                        <Item rounded style={styles.roundedTextBox}>
                            <Icon style={{ color: '#4cd137' }} name='place' type='MaterialIcons' />
                            <Input
                                placeholder='Destination'
                                label='destination'
                                onChangeText={this.props.onChangeDestinationText}
                                value={this.props.route.destination}
                            />
                        </Item>

                    </View>


                </Container>

                <Button rounded style={styles.button}
                    onPress={this.props.onPressSetPickUpAddress}
                >
                    <Text>Set Pick up address</Text>
                </Button>
            </Drawer>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeOriginText: (text) => {
            dispatch(originLocationDone(false));
            dispatch(changeOriginValue(text))
        },
        onChangeDestinationText: (text) => { dispatch(changeDestinationValue(text)) },
        onPressSetPickUpAddress: () => { dispatch(originLocationDone(true)) }
    }
}

const mapStateToProps = state => {
    return {
        route: state.home.route
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);