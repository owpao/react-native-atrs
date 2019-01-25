import React from 'react';
import Geocoder from 'react-native-geocoding';
import {Provider} from 'react-redux';
import reducers from 'reducers';
import { createStore, applyMiddleware} from 'redux';
import Route from 'route';
import {createAppContainer} from "react-navigation";
import thunk from "redux-thunk";

const AppContainer = createAppContainer(Route);
const store = createStore(reducers, applyMiddleware(thunk));

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
                <AppContainer/>
            </Provider>
            
        );
    }
}

