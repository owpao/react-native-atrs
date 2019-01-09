import React, {Component} from 'react';
import {ImageBackground, Image} from 'react-native';
import { Styles } from 'constants/styles';
import imgSrc from 'assets/highway.jpg';
export default class Background extends Component{
    render(){
        return(
            <ImageBackground style={Styles.bg} source = {imgSrc}>
                {this.props.children}
            </ImageBackground>
        );
    }
}