import React, { Fragment } from 'react'
import {
  StyleSheet,
  TextInput,
  View,Image,FlatList,
  TouchableOpacity,
  Text,ScrollView,
} from 'react-native'
import { withNavigation, NavigationEvents } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { themeColor } from '../Constant'
import CustomButton from '../Component/Button'
import SearchInput from '../Component/SearchBar'
class AddVideos extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        search : ""
    }
  }
  static navigationOptions = {
    header: null
  }

  render () {                   
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader home title={'UPLOAD'} />
        <ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
})
export default withNavigation(AddVideos)
 