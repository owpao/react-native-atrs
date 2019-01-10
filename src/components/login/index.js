import React, { Component } from 'react';
import { Constants } from 'expo';
import { Thumbnail, Item, Input, Form, Container, Content, View, Text, Button, Label, Icon, InputGroup } from 'native-base';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Login extends Component {
  render() {
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <Content>
          <View style={{ paddingTop: '40%', height: Constants.screenHeight, alignItems: 'center', }}>
            <Image style={{ width: 200, height: 100 }} source={require('assets/logo.png')} resizeMode="contain"/>

            <Form style={{ marginTop: '10%', marginBottom: '15%', alignItems: 'stretch', justifyContent: 'space-between', width: '75%', height: 125 }}>
              <Item rounded >
                <Icon name='user' type='AntDesign' />
                <Input placeholder='Username' />
              </Item>

              <Item rounded>
                <Icon name='lock' type='Feather' />
                <Input placeholder='Password' secureTextEntry />
              </Item>
            </Form>
            <Grid style={{ width: '75%', justifyContent: 'space-around', alignItems: 'center' }}>
              <Row>
                <Col>
                  <Button block rounded style={{ marginHorizontal: 5, backgroundColor: '#212121' }} onPress={()=> console.log('login!')}>
                    <Text> Login </Text>
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button block transparent onPress={()=> console.log('signUp!')} >
                    <Text style={{ marginTop: '5%', color: '#212121' }}>Don't have an account? Sign up now!</Text>
                  </Button>
                </Col>
              </Row>
            </Grid>

            <Text style={{ marginTop: '40%', fontSize: 9, alignItems: 'baseline' }}>CodeBevy 2019</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

module.exports = Login;