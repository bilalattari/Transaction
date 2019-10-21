import { createStackNavigator, createAppContainer } from 'react-navigation';
import ForgetPassword from './screens/ForgetPassword'
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Transactions from './screens/Transactions';

const MainNavigator = createStackNavigator({
  Transactions: {
    screen: Transactions,
  },
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
  ForgetPassword : {
    screen : ForgetPassword
  },
  Login: {
    screen: Login,
  },
});

const Routes = createAppContainer(MainNavigator);

export default Routes;