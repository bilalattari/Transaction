import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,
    Text,
    Image
} from 'react-native';
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import {withNavigation} from 'react-navigation'
 class Login extends React.Component {
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
              <View style = {{alignItems : 'center',}}>
              <CustomInput label = {'Email'} icon = {'envelope'}
              placeholder = {'Email Address'} textChange = {(text)=> console.log(text)}/>
              <CustomInput 
              icon = {'lock'}
              secureTextEntry = {true}textChange = {(text)=> console.log(text)}
              label = {'Password'} placeholder = {'Enter Pssword'}/>
              </View>
              <TouchableOpacity 
              onPress = {()=> navigation.navigate('ForgetPassword')}
              style = {{height : 40 , padding : 8 , paddingRight : 16  , alignSelf : 'flex-end'}}>
              <Text >Forget Password</Text>
                </TouchableOpacity>
              <View style = {{marginVertical : 12}}>
              <CustomButton title = {'Login'} />
                </View>
          </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent : 'center',
        
        flexDirection: 'column',
      },
    })
    export default withNavigation(Login)
