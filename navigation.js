import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
  BottomTabBar
} from "react-navigation";
import ForgetPassword from './screens/ForgetPassword'
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Favourites from './screens/Favourites'
import Messages from './screens/Messages'
import Transactions from './screens/Transactions';
import LandingScreen from './screens/Landing'
import Chat from './screens/MessageChat'
import Cart from './screens/Cart'
import IntroScreen from './screens/Intro'
import SignUp from './screens/SignupScreen'
import TransferFunds from './screens/TransferFunds';
import WithdrawFunds from './screens/WithdrawFunds';
import ChangeAccountPassword from './screens/ChangePassword';
import AddNewAccount from './screens/TradingAccount';
import VerifyAccount from './screens/VerifyAccount';
import VideoScreen from './screens/VideoScreen';
import Videos from './screens/Videos';
import AddVideos from './screens/AddVidedo';

import Conditions from './screens/TermsCondition';
import AllOrders from './screens/AllOrders';
import Buy from './screens/Buy';
import Notifications from './screens/Notifications';
import RepostClassified from './screens/ReportClassified';
import ProductScreen from './screens/ProductScreen';
import {Icon} from 'react-native-elements'

import {TouchableHighlight , TouchableOpacity} from 'react-native'
let TabBarComponent = (props)=> 
<TouchableHighlight 
onPress = {()=> console.log(props , 'propsprops') }
style={{backgroundColor : 'blue' , flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
<Icon  type = {'font-awesome'} name = {props.name} color = {'#fff'} size = {30}/>
  </TouchableHighlight>
 
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
    screen: Home,
    navigationOptions: {
      headerTitle: "Homje"
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      headerTitle: "Notifications"
    }
  }
});

const OrderStack = createStackNavigator({
  Order: {
    screen: AllOrders,
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
const VideoStack = createStackNavigator({
  Videos: {
    screen: Videos,
    navigationOptions: {
      headerTitle: "Videos"
    }
  },
  ManageVideoScreen: {
    screen: VideoScreen,
    navigationOptions: {
      headerTitle: "Discover"
    }
  },
  AddVideos: {
    screen: AddVideos,
    navigationOptions: {
      headerTitle: "AddVideos"
    }
  },
  
});
const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Profile"
    }
  },
  Favourites : {
    screen: Favourites,
    navigationOptions: {
      headerTitle: "Profile"
    }
  },
  Messages : {
    screen: Messages,
    navigationOptions: {
      headerTitle: "Messages"
    }
  }, 
  Chat : {
    screen: Chat,
    navigationOptions: {
      headerTitle: "Chat"
    }
  },
  Cart : {
    screen: Cart,
    navigationOptions: {
      headerTitle: "Cart"
    }
  },
  Buy : {
    screen: Buy,
    navigationOptions: {
      headerTitle: "Buy"
    }
  },
  Conditions : {
    screen: Conditions,
    navigationOptions: {
      headerTitle: "Conditions"
    }
  },
});

const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: "Feed"
    //  tabBarOnPress :(props)=> console.log(props),
    // tabBarButtonComponent: (props)=> <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} name = {'youtube'} />
    }
  },
  Order: {
    screen: OrderStack,
    navigationOptions: {
      tabBarLabel: "Order"
    // tabBarButtonComponent: (props)=> <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} name = {'play'} />
    }
  },
  Discover: {
    screen: DiscoverStack,
    navigationOptions: {
      tabBarLabel: "Discover"
    // tabBarButtonComponent: (props)=> <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} name = {'file'} />
    }
  },
  Video: {
    screen: VideoStack,
    navigationOptions: {
      tabBarLabel: "Video"
    // tabBarButtonComponent: (props)=> <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} name = {'home'} />
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: "Profile"
    // tabBarButtonComponent: (props)=> <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} name = {'user'} />
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