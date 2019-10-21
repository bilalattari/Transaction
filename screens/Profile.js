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
import {withNavigation} from 'react-navigation'
import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel'
import { ScrollView } from 'react-native-gesture-handler';
 class Profile extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null,
};
profileFields = (name , value)=>{
return(
    <View style  ={{flexDirection : 'row' , minHeight : 50 , borderTopColor : '#FC4A1A' , borderTopWidth : 0.5 }}>
                   <View style = {{flex : 1 , justifyContent : 'center' , padding : 4 , borderRightColor : '#FC4A1A' , borderRightWidth : 0.5}}>
                       <Text style = {{fontSize : 15 , padding : 4 , fontWeight : '700'}}>{name}</Text>
                       </View> 
                       <View style = {{flex : 2 , justifyContent : 'center' , padding : 4}}>
                       <Text style = {{fontSize : 15 , padding : 4}}>{value}</Text>
                    </View> 
               </View>
)
}
    render() {
      const {navigation} = this.props.navigation
        return (
            <View style={styles.container}>
              <CustomHeader  title = {'User Name'} />
              <ScrollView style = {{marginBottom : 25}}>
              <Image source = {require('../assets/avatar.png')} 
              style = {{height : 140 , width : 140 , resizeMode : 'contain' ,
               borderRadius  : 125 , alignSelf : 'center' , marginVertical : 25}} />
               {this.profileFields('Email Address' , 'abcd@gmail.com')}
               {this.profileFields('Phone Number' , '32423423423432')}
               {this.profileFields('Date Of Birth' , '19-4-1997')}
               {this.profileFields('Address' , 'abcd@gmail.com')}
               {this.profileFields('Address(additional)' , 'abcd@gmail.com')}
               {this.profileFields('City' , 'Karachi')}
               {this.profileFields('State' , 'Karachi')}
               {this.profileFields('Zip Code' , '123456')}
               {this.profileFields('Country' , 'Pakistan')}
              </ScrollView>
               
          </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    })
    export default withNavigation(Profile)
