import {createStackNavigator} from "react-navigation";
import Home from 'components/home';
import Login from 'components/login';

const Route = createStackNavigator({
        Home : { screen: Home },
        Login : { screen: Login }
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: { header: null }
    });

export default Route;