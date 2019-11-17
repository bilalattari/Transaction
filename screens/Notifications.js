import React, { Fragment } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  Image
} from 'react-native'
import CustomInput from '../Component/Input'
import ProductDescription from '../Component/ProductDescription'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import { withNavigation, NavigationEvents } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { themeColor } from '../Constant'
import DocumentPicker from 'react-native-document-picker'
const url =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI2GaDkRQ5FV83CxoXIu0tN2oVNIN8ANTLdnb4j00c-zYOVyBD'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  static navigationOptions = {
    header: null
  }

  render () {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader home title={'NOTIFICATIONS'} />
        <View style = {{flexDirection : 'row' , marginHorizontal : 12 , alignItems : 'center' , minHeight : 80}}>
            <Text style = {{fontSize : 18 , color : themeColor , fontWeight : 'bold'}}>Sound </Text>
            <View style = {{flexDirection : 'row'}}>
                <Icon type = {'font-awesome'} name = {'volume-up'} color = {themeColor} />
                <Icon type = {'font-awesome'} name = {'volume-mute'} color = {themeColor} />
                <Icon type = {'font-awesome'} name = {'mobile'} color = {themeColor} />
             </View>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
export default withNavigation(Cart)
