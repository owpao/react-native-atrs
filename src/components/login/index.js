import React, { Component } from 'react';
import { Item, Input, Form, Container, Content, View, Text, Button, Icon } from 'native-base';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from 'components/home';
import Style from './styles';


class Login extends Component {
state = { username: 'owpao', password: 'owpao', loading: false };

  onSignin = () => {
    if (this.state.username == 'owpao' && this.state.password == 'owpao') {
      this.props.navigation.navigate('Home');
    } else {
      console.log("error");
    }

  };

  

  render() {
    return (
      <Container style={Style.loginContainer}>
        <Content>
          <View style={Style.loginView}>
            <Image style={{ width: 200, height: 100 }} source={require('assets/logo.png')} resizeMode="contain" />

            <Form style={Style.loginForm}>
              <Item rounded >
                <Icon name='user' type='AntDesign' />
                <Input
                  placeholder='Username'
                  label='username'
                  value={this.state.username}
                  onChangeText={username => this.setState({ username })}
                />
              </Item>

              <Item rounded>
                <Icon name='lock' type='Feather' />
                <Input
                  placeholder='Password'
                  secureTextEntry
                  label='password'
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
            </Form>
            <Grid style={Style.loginGrid}>
              <Row>
                <Col>
                  <Button block rounded style={Style.loginSignin} onPress = {this.onSignin.bind(this)}>
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

