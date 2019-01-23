import React from 'react';
import Login from 'components/login';
import Geocoder from 'react-native-geocoding';
import {Provider} from 'react-redux';
import reducers from 'reducers';
import { createStore } from 'redux';

const store = createStore(reducers);

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
        Geocoder.init("AIzaSyBcOOWW6RjIGK3uNutKxgiA0TUn4KVsWuA");
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        
        return (
            <Provider store = {store}>
                <Login/>
            </Provider>
            
        );
    }
}

