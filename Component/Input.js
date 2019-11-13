import React, { Component } from 'react'
import { Input  ,Icon} from 'react-native-elements'
import {themeColor} from '../Constant/index'

export default CustomInput = ( props ) => 
  <Input
    containerStyle={ [ props.containerStyle ,{ width: '100%' ,alignSelf : 'center' , 
    marginVertical : 6 ,  }]}
    inputContainerStyle={[props.inputContainerStyle , 
       {  borderWidth : 1 , borderColor :themeColor , height : 50  , padding : 8 ,}]}
    inputStyle={{ fontSize: 16 ,   }}
    keyboardType = {props.keyboardType  ? props.keyboardType : 'default'  }
    placeholder={props.placeholder}
    placeholderTextColor = {'#53c3f2'}
    value = {props.value}
    secureTextEntry = {props.secureTextEntry}
    onChangeText = {(text)=> props.textChange(text)}
    errorStyle={{ color: 'red' }}
    leftIcon={
      props.icon ? 
      <Icon
        name={props.icon}
        size={16}
        type = {'font-awesome'}
        color='#909291'
      /> : null
    }
    leftIconContainerStyle = {{padding : 0}}
    {...props}
  />

