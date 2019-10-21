import React, { Component } from 'react'
import { Header , Input } from 'react-native-elements'

export default CustomHeader = ( props ) => 
<Header
barStyle="light-content" // or directly
containerStyle = {{backgroundColor : '#FC4A1A'}}
leftComponent={{ icon: 'menu', color: '#fff'  , onPress :()=> props.openMenu()}}
centerComponent={{ text: props.title, style: { color: '#fff' , fontSize : 18 } }}
/>

