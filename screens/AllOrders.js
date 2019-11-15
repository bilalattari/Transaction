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
             <View style = {{marginHorizontal : 12}}>
            <View style = {{flexDirection  : "row" , height : 50 , alignItems : "center"  , justifyContent : "space-between"}}> 
            <Image source = {require('../assets/product.png')} 
            style = {{height : 48 , width:  55 , borderRadius : 5 , }} />
            <View style = {{height : 45 , width : "65%" , borderWidth :1 , borderColor : themeColor ,
             borderRadius : 3 , justifyContent : "center"  }}>
            <Text style = {{paddingLeft : 8 , fontSize : 18 , fontWeight  : 'bold' }}>Product Title</Text>
            </View>
            <View style = {{height : 45 , width : "15%" , borderWidth :1 , borderColor : themeColor ,
            alignItems : "center" , justifyContent : 'center',
            borderRadius : 3 , justifyContent : "center"  }}>
            <Text style = {{ fontSize : 14 }}>10</Text>
            </View>
            </View>
            <View style = {{height : 120 , width : "95%" , borderWidth :1 ,
             borderColor : themeColor ,padding : 12,alignSelf : "center",
            borderRadius : 3   }}>
            <Text style = {{ fontSize : 14 }}>sadjhsalkdhsajlkd dhkaslhd kdlhas k dkaslhdlkas kdas ld saklhdask</Text>
            </View>
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
