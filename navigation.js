import { createStackNavigator, createAppContainer } from 'react-navigation';
import ForgetPassword from './screens/ForgetPassword'
import Login from './screens/Login';

const MainNavigator = createStackNavigator({
  SplashScreen: {
    screen: Login,
  },
  ForgetPassword : {
    screen : ForgetPassword
  }
});

const Routes = createAppContainer(MainNavigator);

export default Routes;