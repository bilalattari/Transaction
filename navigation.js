import { createStackNavigator, createAppContainer } from 'react-navigation';
import ForgetPassword from './screens/ForgetPassword'
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Transactions from './screens/Transactions';
import TransferFunds from './screens/TransferFunds';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Transactions: {
    screen: Transactions,
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
  TransferFunds: {
    screen: TransferFunds,
  },
  
});

const Routes = createAppContainer(MainNavigator);

export default Routes;