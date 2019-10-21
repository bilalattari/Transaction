import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,
    Text,
    Image
} from 'react-native';
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import {withNavigation} from 'react-navigation'
import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel'
import { ScrollView } from 'react-native-gesture-handler';
 class Transactions extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null,
};

    render() {
      const {navigation} = this.props.navigation
        return (
            <View style={styles.container}>
              <CustomHeader  title = {'Transactions'} />
              <ScrollView style = {{marginBottom : 25}}>
              
              </ScrollView>
               
          </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    })
    export default withNavigation(Transactions)
