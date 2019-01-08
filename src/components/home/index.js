import React, {Component} from 'react';

import {
    Container, Header, Left, Button, Icon, Right, Body, Title, Drawer
} from 'native-base';

import {StyleSheet, View} from 'react-native';
import {Constants} from 'expo';
import Sidebar from 'components/sidebar';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#212121",
        height: Constants.statusBarHeight,
    },
});

export default class Style extends Component {
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar/>}
                onClose={() => this.closeDrawer()} >

                <Container>
                    <Header style={styles.statusBar}/>
                    <Header style={{backgroundColor: "#212121"}}>
                        <Left>
                            <Button transparent onPress={ () => this.openDrawer()}>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>ATRS</Title>
                        </Body>
                        <Right/>
                    </Header>
                </Container>
            </Drawer>
        );
    }
}

module.exports = Style;