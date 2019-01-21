import React from 'react';
import { MapView } from 'expo';
import { Container, View, Item, Icon, Input } from 'native-base';
import { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

export default class App extends React.Component {

    state = {
        region: {
            latitude: 14.5248595,
            longitude: 121.0001437,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        route: {
            origin: "",
            destination: ""
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

    componentDidMount() {
        Geocoder.init("AIzaSyBcOOWW6RjIGK3uNutKxgiA0TUn4KVsWuA");
        // navigator.geolocation.getCurrentPosition(
        //     (position) => { alert("value:" + position) },
        //     (error) => { console.log(error) },
        //     {
        //         enableHighAccuracy: true,
        //         timeout: 20000,
        //         maximumAge: 10000
        //     }
        // )
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    onRegionChangeComplete() {
        region = this.state.region;
        console.log("coordinates:" + JSON.stringify(region.longitude + ", " + region.latitude))

        Geocoder.from(region.latitude, region.longitude)
            .then(json => {
                var addressComponent = json.results[0].address_components[0];
                console.log(addressComponent.long_name);
                 this.setState({route: {origin: addressComponent.long_name}})
                 
            })
            .catch(error => console.warn(error));
    }

    render() {
        return (
            <Container>
                <View style={{ alignContent: "center", justifyContent: "space-evenly", alignItems: "center", height: 100 }}>
                    <Item style={{ height: '50%', paddingHorizontal: 10, backgroundColor: '#f5f6fa' }}>
                        <Icon style={{ color: '#e84118' }} name='place' type='MaterialIcons' />
                        <Input
                            placeholder='Pick-up point'
                            label='pickup'
                            value = {this.state.route.origin}
                        />
                    </Item>

                    <Item style={{ height: '50%', paddingHorizontal: 10, backgroundColor: '#f5f6fa' }}>
                        <Icon style={{ color: '#4cd137' }} name='place' type='MaterialIcons' />
                        <Input
                            placeholder='Destination'
                            label='destination'
                            value = {this.state.route.destination}
                        />
                    </Item>
                </View>
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
                    onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
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
