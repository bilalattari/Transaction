import React, { Component } from 'react'
import { Input  ,Icon} from 'react-native-elements'

export default CustomInput = ( props ) => 
  <Input
    containerStyle={ [ props.containerStyle ,{ width: '95%' , marginTop : 12  }]}
    inputContainerStyle={[props.inputContainerStyle ,  { height: 40 }]}
    inputStyle={{ fontSize: 15 }}
    labelStyle={{ fontWeight: '700' }}
    label={props.label}
    keyboardType = {props.keyboardType  ? props.keyboardType : 'default' }
    placeholder={props.placeholder}
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

