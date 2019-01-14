import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
    loginContainer: {
        paddingTop: Constants.statusBarHeight
    },
    loginView:
    {
        paddingTop: '40%',
        height: Constants.screenHeight,
        alignItems: 'center'
    },
    loginForm:
    {
        marginTop: '10%',
        marginBottom: '15%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        width: '75%',
        height: 125
    },
    loginGrid: {
        width: '75%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    loginCopyright: {
        marginTop: '40%',
        fontSize: 9,
        alignItems: 'baseline'
    },
    loginSignup: { marginTop: '5%', color: '#212121' },
    loginSignin: { marginHorizontal: 5, backgroundColor: '#212121' }
})