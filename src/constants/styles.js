import { StyleSheet, Image } from 'react-native';
import {Constants} from 'expo';

export const Styles = StyleSheet.create({
    bg: {
        flex: 1,
        width:null,
        height:null,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBar: {
        backgroundColor: "#212121",
        height: Constants.statusBarHeight,
    },
});
