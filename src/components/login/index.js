import React, { Component } from 'react';
import { Item, Input, Form, Container, Content, View, Text, Button, Icon } from 'native-base';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from 'components/home';
import Style from './styles';

class Login extends Component {
  render() {
    return (
      <Container style={Style.container}>
        <Content>
          <View style={Style.view}>
            <Image style={{ width: 200, height: 100 }} source={require('assets/logo.png')} resizeMode="contain" />

            <Form style={Style.form}>
              <Item rounded >
                <Icon name='user' type='AntDesign' />
                <Input placeholder='Username' />
              </Item>

              <Item rounded>
                <Icon name='lock' type='Feather' />
                <Input placeholder='Password' secureTextEntry />
              </Item>
            </Form>
            <Grid style={Style.grid}>
              <Row>
                <Col>
                  <Button block rounded style={{ marginHorizontal: 5, backgroundColor: '#212121' }} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text> Login </Text>
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button block transparent onPress={() => console.log('signUp!')} >
                    <Text style={{ marginTop: '5%', color: '#212121' }}>Don't have an account? Sign up now!</Text>
                  </Button>
                </Col>
              </Row>
            </Grid>

            <Text style={Style.copyright}>CodeBevy 2019</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login }
},
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: { header: null }
  });
export default createAppContainer(AppNavigator);

