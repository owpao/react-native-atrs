import React from 'react';
import HomeScreen from 'components/home';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#212121",
        height: Expo.Constants.statusBarHeight,
    }
});

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("native-base/Fonts/Ionicons.ttf")
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

        return (
            <HomeScreen/>
        );
    }
}

