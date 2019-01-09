import React from 'react';
import { MapView } from 'expo';

export default class App extends React.Component {

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 14.5248595,
                    longitude: 121.0001437,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }
}
