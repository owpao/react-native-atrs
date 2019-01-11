import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    },
    view:
    {
        paddingTop: '40%',
        height: Constants.screenHeight,
        alignItems: 'center'
    },
    form:
    {
        marginTop: '10%',
        marginBottom: '15%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        width: '75%',
        height: 125
    },
    grid:{ 
        width: '75%', 
        justifyContent: 'space-around', 
        alignItems: 'center' 
    },
    copyright:{ 
        marginTop: '40%', 
        fontSize: 9, 
        alignItems: 'baseline' 
    }
})