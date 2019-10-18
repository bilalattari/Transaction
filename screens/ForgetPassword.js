import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
export default class ForgetPassword extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null,
};
    render() {
        return (
            <View style={styles.container}>
              <View style = {{alignItems : 'center',}}>
              <CustomInput 
              icon = {'lock'}
              secureTextEntry = {true}textChange = {(text)=> console.log(text)}
              label = {'New Password'} placeholder = {'Enter New Pssword'}/>
              </View>
              <View style = {{marginVertical : 12}}>
              <CustomButton title = {'Save New Password'} />
                </View>
          </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection: 'column',
      },
    })
