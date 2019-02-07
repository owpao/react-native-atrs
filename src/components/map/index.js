import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { getOriginAddressValue, updateRegion, getDestinationAddressValue, } from '../../constants/actions';

class Map extends React.Component {

    state = {
        region: {
            latitude: 14.5248595,
            longitude: 121.0001437,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }

    // getInitialState(){
    //     return this.state.region;
    // }

    componentDidMount() {
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    onRegionChangeComplete() {
        this.props.updateRegion(this.state.region);
        let originDone = this.props.originDone;
        console.log("originDone:",originDone);
        if (!originDone) {
            this.props.getOriginAddress(this.state.region);
        } else {
            this.props.getDestinationAddress(this.state.region);
        }
    }

    render() {
        return (
            <Container>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={this.props.region}
                    showsUserLocation={true}
                    followUserLocation={true}
                    zoomEnabled={true}
                    onRegionChange={this.onRegionChange.bind(this)}
                    onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                >
                    <Marker
                        coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
                        title="Origin"
                        description="Origin Location"
                    />

                    {/* <Marker
                        coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
                        title="Destination"
                        description="Destination Location"
                    /> */}

                </MapView>
            </Container>


        );
    }
}

const mapStateToProps = state => {
    return {
        region: state.home.region,
        originDone: state.home.originLocationDone
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOriginAddress: (region) => { dispatch(getOriginAddressValue(region)); },
        getDestinationAddress: (region) => { dispatch(getDestinationAddressValue(region)); },
        updateRegion: (region) => { dispatch(updateRegion(region)); }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Map);
