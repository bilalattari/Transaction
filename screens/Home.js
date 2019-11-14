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
import {withNavigation , NavigationEvents}  from 'react-navigation'
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
closeControlPanel = () => {
  this._drawer.close()
};
openControlPanel = () => {
  this._drawer.open()
};

    render() {
      const {navigation} = this.props.navigation

        return (
          <View>
               <NavigationEvents onDidBlur = {()=> this.closeControlPanel()} />
            <View style={styles.container}>
              <CustomHeader  home = {true}  title = {'HOME'} />
              <ScrollView style = {{marginBottom : 25}}>
              </ScrollView>
          </View>
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
