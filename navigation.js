import { createStackNavigator, createAppContainer } from 'react-navigation';
import ForgetPassword from './screens/ForgetPassword'
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Transactions from './screens/Transactions';
import TransferFunds from './screens/TransferFunds';
import WithdrawFunds from './screens/WithdrawFunds';
import ChangeAccountPassword from './screens/ChangePassword';

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
  WithdrawFunds: {
    screen: WithdrawFunds,
  },
  ChangeAccountPassword: {
    screen: ChangeAccountPassword,
  },
  
});

const Routes = createAppContainer(MainNavigator);

export default Routes;