import React from 'react';
import {  Header, Title } from 'native-base';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
  } from 'react-native'
export default   HeaderComp  = (props) =>{
    return(
        <Header style={{ backgroundColor: 'white', height: 50 }}>
        {/* <TouchableOpacity style={{ flex: 1 , justifyContent : 'center' }}
             onPress = {()=> props.leftIconPress()}>
            <Icon name = 'chevron-left' size = {30}  />
            </TouchableOpacity>
            <Title style={{ flex : 1, paddingTop: 10, color: 'black', flexGrow: 1 }}>{props.title}</Title>
            <Text style={{ flex : 1, marginRight: 0, paddingTop: 13, fontSize: 16, flexGrow: 1, color: 'white', textAlign: 'right' }}>{
                props.rightText ? props.rightText  : '' 
            }</Text> */}
        </Header>
    )
}