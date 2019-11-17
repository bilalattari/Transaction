import React, { Component } from 'react'
import { Header, Input, Icon } from 'react-native-elements'
import { StatusBar, View, Image, TouchableOpacity } from 'react-native'
import { themeColor } from '../Constant/index'
import Logo from '../Component/LogoImage'
export default (CustomHeader = props => (
  <View>
    <StatusBar backgroundColor={themeColor} translucent />
    <Header
      barStyle='light-content' // or directly
      containerStyle={{ backgroundColor: themeColor }}
      leftComponent={
        props.home ? (
          <Logo height={70} />
        ) : (
          { icon: 'arrow-back', color: '#fff' }
        )
      }
      centerComponent={{
        text: props.title,
        style: { color: '#fff', fontSize: 18 }
      }}
      rightComponent={
        props.home ? (
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Favourites')}
            >
              <Icon
                type={'font-awesome'}
                name={'heart'}
                color={'#fff'}
                size={16}
                containerStyle={{ paddingHorizontal: 8 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                type={'font-awesome'}
                name={'envelope'}
                color={'#fff'}
                size={16}
                containerStyle={{ paddingHorizontal: 8 }}
                onPress={() => props.navigation.navigate('Messages')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                type={'font-awesome'}
                name={'shopping-bag'}
                onPress={() => props.navigation.navigate('Cart')}
                color={'#fff'}
                size={16}
                containerStyle={{ paddingHorizontal: 8 }}
              />
            </TouchableOpacity>
          </View>
        ) : null
      }
    />
  </View>
))
