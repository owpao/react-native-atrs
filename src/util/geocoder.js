import Geocoder from 'react-native-geocoding';
export function getAddressByRegion(region) {
    console.log(region);
    return Geocoder.from(region.latitude, region.longitude);
}
