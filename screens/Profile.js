import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,
    Text,
    Image
} from 'react-native';
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import {withNavigation , NavigationEvents}  from 'react-navigation'
import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel'
import { Icon } from 'react-native-elements';
import { themeColor } from '../Constant';
 class Profile extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null,
};

render() {
      const {navigation} = this.props.navigation
        return (
          <View>
              <CustomHeader  home = {true}  title = {'User Name'} />
              <Text style = {styles.header}>Change Picture</Text>
              <TouchableOpacity style = {styles.imageView}>
                 <Icon type = {"font-awesome"} name  = {"image"} color = {"#fff"} size  = {30} />
                 </TouchableOpacity>
                 <View style = {{marginVertical : 21}}>
                   <CustomButton title = {"Upload"} />
                   </View>
            </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
  header : {color : themeColor , padding : 12 , fontWeight: "800" ,fontSize : 20 , textAlign : "center" },
  imageView : {height : 180 , width : 160 , alignItems : "center" ,
  justifyContent : "center" ,alignSelf  : "center",  borderRadius : 5 , backgroundColor : 'skyblue'},
    })
    export default withNavigation(Profile)
