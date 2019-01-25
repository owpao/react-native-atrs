import React from 'react';
import { MapView } from 'expo';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { getOriginAddressValue } from '../../constants/actions';

class Map extends React.Component {

    componentDidMount() {
    }

    onRegionChange(region) {
        console.log("region:",region)
    }

    onRegionChangeComplete() {
        let region = this.props.region;
        this.props.getOriginAddress(region);

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
    console.log(state.home.title);
    return {
        region: state.home.region
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOriginAddress: (region) => { dispatch(getOriginAddressValue(region)); }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Map);
