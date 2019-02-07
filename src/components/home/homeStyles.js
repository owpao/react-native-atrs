import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export const Styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#212121",
        height: Constants.statusBarHeight
    },
    headerImage: {
        alignSelf: 'center',
        width: 200,
        height: 35
    },
    view: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: "center",
        height: 80,
        width: '90%',
        top: 100
    },
    roundedTextBox: {
        height: '50%',
        paddingHorizontal: 10,
        backgroundColor: '#f5f6fa',
        marginVertical: 3
    },
    button: {
        position: 'absolute',
        flex: 1,
        alignSelf: 'center',
        bottom: 50,
        borderRadius: 1
    }

});