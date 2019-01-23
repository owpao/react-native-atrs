import React from 'react';
import { MapView } from 'expo';
import { Container } from 'native-base';
import { Marker } from 'react-native-maps';
import { connect } from 'react-redux';

class App extends React.Component {

    state = {
        region: {
            latitude: 14.5248595,
            longitude: 121.0001437,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }

    componentDidMount() {
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    onRegionChangeComplete() {
        region = this.state.region;
        this.props.getOriginAddress(region);

    }

    render() {
        return (
            <Container>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={this.state.region}
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

const mapStateToProps = state => {
    return {
        region: state.region
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOriginAddress: (region) => {
            // getOriginAddress(region);
            dispatch({
                type:'change_pickup', region:region
            })
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(App);
