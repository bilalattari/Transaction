import React, { Fragment } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView
} from 'react-native'
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import { withNavigation, NavigationEvents } from 'react-navigation'
import { themeColor } from '../Constant'
import Tags from '../Component/Tag'
class AllOrders extends React.Component {
  constructor (props) {
    super(props)
  }
  static navigationOptions = {
    header: null
  }
  render () {
    const { navigation } = this.props.navigation
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <CustomHeader home title={'ALL ORDERS'} />
            <View style = {{flexDirection  : "row" , height : 40 ,  justifyContent : "space-between" , 
            marginHorizontal : "3%" , alignItems : "center" }}> 
            <View style  = {{flexDirection: 'row' , alignItems : "center"}} >
            <Image source = {require('../assets/product.png')} 
            style = {{height : 40 , width:  50 , borderRadius : 5 , }} />
            <Text style = {{paddingLeft : 8 , fontSize : 18 , fontWeight  : 'bold' }}>Product Title</Text>
            </View>
            <Text >56</Text>
             </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundVideo: {
    height: 200,
    width: '100%',
    backgroundColor: themeColor
  },
  labelStyle :{ color: themeColor, fontSize: 14, paddingVertical: 2 }
})
export default withNavigation(AllOrders)
