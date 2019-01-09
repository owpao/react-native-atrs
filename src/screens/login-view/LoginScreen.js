import React, {Component} from 'react';
import Background from './Background';
import { Text, View } from 'react-native';
import { Styles } from '../../constants/styles';

export default class LoginScreen extends Component {
  render() {
    return (
      <Background>
          <View style = {Styles.container}>
          <Text>Sample</Text>
          </View>
          
      </Background>
    );
  }
}