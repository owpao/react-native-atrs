import React, { Component } from 'react';
import { Item, Input, Form, Container, Content, View, Text, Button, Icon } from 'native-base';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from 'components/home';
import Style from './styles';
import styles from './styles';

class Login extends Component {
  render() {
    return (
      <Container style={Style.loginContainer}>
        <Content>
          <View style={Style.loginView}>
            <Image style={{ width: 200, height: 100 }} source={require('assets/logo.png')} resizeMode="contain" />

            <Form style={Style.loginForm}>
              <Item rounded >
                <Icon name='user' type='AntDesign' />
                <Input placeholder='Username' />
              </Item>

              <Item rounded>
                <Icon name='lock' type='Feather' />
                <Input placeholder='Password' secureTextEntry />
              </Item>
            </Form>
            <Grid style={Style.loginGrid}>
              <Row>
                <Col>
                  <Button block rounded style={Style.loginSignin} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text> Login </Text>
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button block transparent onPress={() => console.log('signUp!')} >
                    <Text style={Style.loginSignup}>Don't have an account? Sign up now!</Text>
                  </Button>
                </Col>
              </Row>
            </Grid>

            <Text style={Style.loginCopyright}>CodeBevy 2019</Text>
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

