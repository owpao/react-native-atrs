//logic placed here for organized code
import Geocoder from 'react-native-geocoding';
export function getOriginAddress(region) {
    try {
        return Geocoder.from(region.latitude, region.longitude);
    }catch(error){
        console.error(error);
    }
}
