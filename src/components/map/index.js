import React from 'react';
import { MapView } from 'expo';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { getOriginAddressValue, updateRegion } from '../../constants/actions';

class Map extends React.Component {

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
        this.state.region = region;
    }

    onRegionChangeComplete() {
        this.props.updateRegion(this.state.region);
        this.props.getOriginAddress(this.state.region);
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
                    {/* <Marker
                        coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
                        title="Sample"
                        description="Sample Description"
                    /> */}

                </MapView>
            </Container>


        );
    }
}

const mapStateToProps = state => {
    return {
        region: state.home.region
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOriginAddress: (region) => { dispatch(getOriginAddressValue(region)); },
        updateRegion: (region) => { dispatch(updateRegion(region)); }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Map);
