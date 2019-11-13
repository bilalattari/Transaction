import React, { Component } from 'react'
import { Header , Input  } from 'react-native-elements'
import {StatusBar , View} from 'react-native'
import {themeColor} from '../Constant/index'
export default CustomHeader = ( props ) =>
<View>
<StatusBar backgroundColor  = {themeColor} translucent = {true} />
<Header
barStyle="light-content" // or directly
containerStyle = {{backgroundColor :themeColor }}
leftComponent={{ icon: props.menu ? 'menu' : 'arrow-back', color: '#fff'  ,
 onPress :()=> props.openMenu()}}
centerComponent={{ text: props.title, style: { color: '#fff' , fontSize : 18 } }}
/>
    </View> 

