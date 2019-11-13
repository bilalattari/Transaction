import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import ForgetPassword from './screens/ForgetPassword'
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Transactions from './screens/Transactions';
import LandingScreen from './screens/Landing'
import IntroScreen from './screens/Intro'

import SignUp from './screens/SignupScreen'
import TransferFunds from './screens/TransferFunds';
import WithdrawFunds from './screens/WithdrawFunds';
import ChangeAccountPassword from './screens/ChangePassword';
import AddNewAccount from './screens/TradingAccount';
import VerifyAccount from './screens/VerifyAccount';

const AuthStack = createStackNavigator({
  Landing: {
    screen: Transactions,
    navigationOptions: {
      headerTitle: "Landing"
    }
  },
  SignIn: {
    screen: Login,
    navigationOptions: {
      headerTitle: "Sign In"
    }
  },
  CreateAccount: {
    screen: SignUp,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  ForgotPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      headerTitle: "Forgot Password"
    }
  },
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Feed"
    }
  },
  Details: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const SearchStack = createStackNavigator({
  Search: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Search"
    }
  },
  Details: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const DiscoverStack = createStackNavigator({
  Discover: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Discover"
    }
  },
  Details: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: "Feed"
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: "Search"
    }
  },
  Discover: {
    screen: DiscoverStack,
    navigationOptions: {
      tabBarLabel: "Discover"
    }
  }
});

const SettingsStack = createStackNavigator({
  SettingsList: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Settings List"
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Profile"
    }
  }
});

const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
  Settings: SettingsStack
});

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    Promotion1: {
      screen: Profile
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const App = createSwitchNavigator({
  Loading: {
    screen: LandingScreen
  },
  Auth: {
    screen: AuthStack
  },
  App: {
    screen: AppModalStack
  }
});

const Routes = createAppContainer(App);

export default Routes;