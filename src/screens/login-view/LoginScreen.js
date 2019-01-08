import React, {Component} from 'react';
import Background from './Background';
import { Text, View } from 'react-native';
import { styles } from '../../constants/styles';

export default class LoginScreen extends Component {
  render() {
    return (
      <Background>
          <View style = {styles.container}>
          <Text>Sample</Text>
          </View>
          
      </Background>
    );
  }
}