import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,
    Text,
    Image
} from 'react-native';
import CustomHeader from '../Component/header'
import {withNavigation} from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements'
let ProfileFields = (props) =>{
 return(
<View style  ={{ minHeight : 50 , flexDirection : 'row'}}>
  <Icon type = {'font-awesome'} name = {props.iconName} color = {'grey'}  size = {20} 
  containerStyle  = {styles.iconContainer} />
  <View>
                       <Text style = {{fontSize : 12 ,  fontWeight : '700'}}>{props.name}</Text>
                       <Text style = {{fontSize : 16 , }}>{props.value}</Text>
               </View>
    </View>
 ) 
}

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
            <View style={styles.container}>
              <CustomHeader  title = {'User Name'} openMenu = {()=> this.props.navigation.navigate('Home')}  />
              <ScrollView style = {{marginBottom : 25}}>
              <Image source = {require('../assets/avatar.png')} 
              style = {styles.imageStyle} />
               <Text style = {{alignSelf : 'center' , color : 'skyblue' , fontSize : 18}}> @Bilal Raza </Text>
               <Text style = {{alignSelf : 'center'  ,fontSize : 16  , marginBottom : 12}}> attari1235@gmail.com </Text>

               <ProfileFields iconName = {'phone'} name = {'Phone Number'}  value = {'32423423423432'} /> 
               <ProfileFields iconName = {'calendar'} name = {'Date Of Birth'}  value = {'19-4-1997'} /> 
               <ProfileFields iconName = {'address-card'} name = {'Address'}  value = {'abcd@gmail.com'} /> 
               <ProfileFields iconName = {'map-marker'} name = {'Address(additional)'}  value = {'abcd@gmail.com'} /> 
               <ProfileFields iconName = {'map-marker'} name = {'City'}  value = {'Karachi'} /> 
               <ProfileFields iconName = {'map-marker'} name = {'State'}  value = {'Karachi'} /> 
               <ProfileFields iconName = {'map-marker'} name = {'Zip Code'}  value = {'123456'} /> 
               <ProfileFields iconName = {'flag'} name = {'Country'}  value = {'Pakistan'} /> 
              </ScrollView>
               
          </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      imageStyle : {height : 140 , width : 140 , resizeMode : 'contain' ,
      borderRadius  : 125 , alignSelf : 'center' , marginTop : 25 , marginBottom : 12},
      iconContainer : {borderColor : '#98B1CA' , borderWidth : 0.5 ,  marginHorizontal : 12,
      borderRadius : 25  , height : 42 , width : 42 , justifyContent : 'center' , alignItems :"center"},
    })
    export default withNavigation(Profile)
