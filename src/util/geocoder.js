import Geocoder from 'react-native-geocoding';
export function getOriginAddressByRegion(region) {
    console.log(region);
    return Geocoder.from(region.latitude, region.longitude);
}
