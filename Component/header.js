import React, { Component } from 'react'
import { Header , Input, Icon  } from 'react-native-elements'
import {StatusBar , View , Image} from 'react-native'
import {themeColor} from '../Constant/index'
import Logo from '../Component/LogoImage'
export default CustomHeader = ( props ) =>
<View>
<StatusBar backgroundColor  = {themeColor} translucent = {true} />
<Header
barStyle="light-content" // or directly
containerStyle = {{backgroundColor :themeColor }}
leftComponent={ props.home ? <Logo height = {70} />  :   { icon:  'arrow-back', color: '#fff'}}
centerComponent={{ text: props.title, style: { color: '#fff' , fontSize : 18 } }}
rightComponent = {props.home  ? <View style = {{flexDirection : 'row' , justifyContent : 'space-between'}}>
    <Icon type = {'font-awesome'} name = {'heart'} color  = {'#fff'} size = {16} containerStyle = {{paddingHorizontal :8}} />
    <Icon type = {'font-awesome'} name = {'envelope'} color  = {'#fff'} size = {16} containerStyle = {{paddingHorizontal :8}} />
    <Icon type = {'font-awesome'} name = {'shopping-bag'} color  = {'#fff'} size = {16} containerStyle = {{paddingHorizontal :8}} />
</View> : null}
/>
</View> 

