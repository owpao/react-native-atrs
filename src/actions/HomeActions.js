//logic placed here for organized code
import Geocoder from 'react-native-geocoding';
export function getOriginAddress(region) {
    try {
       result = Geocoder.from(region.latitude, region.longitude);
       return result;
    }catch(error){
        console.error(error);
    }
};
