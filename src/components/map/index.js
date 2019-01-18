import React from 'react';
import { MapView } from 'expo';
import { Container } from 'native-base';
import { Marker } from 'react-native-maps';

export default class App extends React.Component {
    state = {
        region: {
            latitude: 14.5248595,
            longitude: 121.0001437,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    };
    getInitialState() {
        return {
            region: {
                latitude: 14.5248595,
                longitude: 121.0001437,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <Container>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 14.5248595,
                        longitude: 121.0001437,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation={true}
                    followUserLocation={true}
                    zoomEnabled={true}
                    onRegionChange={this.onRegionChange.bind(this)}
                >
                    <Marker
                        coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
                        title="Sample"
                        description="Sample Description"
                    />
                </MapView>
            </Container>


        );
    }
}
