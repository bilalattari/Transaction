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
closeControlPanel = () => {
  this._drawer.close()
};
openControlPanel = () => {
  this._drawer.open()
};

    render() {
      const {navigation} = this.props.navigation

        return (
          <Drawer
            ref={ref => (this._drawer = ref)}
            type='overlay'
            content={<ControlPanel navigation={this.props.navigation} />}
            tapToClose
            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            styles={{ 
            shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 ,}}
            tweenHandler={ratio => ({
              main: { opacity: (2 - ratio) / 2 }
            })}
            ref={(ref) => this._drawer = ref}
             >
            <View style={styles.container}>
              <CustomHeader  menu = {true} title = {'HOME'} openMenu = {()=> this.openControlPanel()}/>
              <ScrollView style = {{marginBottom : 25}}>
              </ScrollView>
          </View>
          </Drawer>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    })
    export default withNavigation(Transactions)
