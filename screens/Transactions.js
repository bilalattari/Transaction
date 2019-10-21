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
import { Picker } from "native-base";
import {withNavigation} from 'react-navigation'
import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel'
 class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        selected: "key1"
        }
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
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 ,  },
            main: { paddingLeft: 3 }
          }
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
              <CustomHeader openMenu = {()=> this.openControlPanel()} title = {'Transactions'} />
              <View  style = {styles.chunkPicker}>
        <Picker
            note
            mode="dropdown"
            style={{  height :45,}}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="DEPOSITS" value="deposit" />
            <Picker.Item label="WITHDRAWEL" value="withdrawel" />
            <Picker.Item label="INTERNAL TRANSFERS" value="transfer" />
          </Picker>
            </View>
            <View style = {{flexDirection : 'row' , minHeight : 40 ,  borderTopColor : '#FC4A1A' , borderTopWidth : 0.5}}>
                <View style = {[styles.amountBox , {width : '25%'}]}>
                    <Text style = {{fontWeight : '700'}}>MT Login</Text>
                </View>
                <View style = {[styles.amountBox , {width : '25%'}]}>
                    <Text style = {{fontWeight : '700'}}>Amount</Text>
                </View>
                <View style = {[styles.amountBox , {width : '22%'}]}>
                    <Text style = {{fontWeight : '700'}}>Status</Text>
                </View>
                <View style = {[styles.amountBox , {width : '28%'}]}>
                    <Text style = {{fontWeight : '700'}}>Created Date</Text>
                </View>
            </View>
            {
                ['1','2','3'].map((data , index)=>{
                    return(
            <View style = {{flexDirection : 'row' , minHeight : 40 , 
             borderTopColor : '#FC4A1A' , borderTopWidth : 0.5 ,borderBottomColor  : index === ['1','2','3'].length - 1 ? '#FC4A1A' : null,
             borderBottomWidth  : index ===['1','2','3'].length - 1 ? 0.5 : null,
                 }}>
                <View style = {[styles.amountBox , {width : '25%'}]}>
                    <Text style = {{fontSize : 13}}>0213910283</Text>
                </View>
                <View style = {[styles.amountBox , {width : '25%'}]}>
                    <Text style = {{fontSize : 13}}>$12000</Text>
                </View>
                <View style = {[styles.amountBox , {width : '22%'}]}>
                    <Text style = {{fontSize : 13}}>Approved</Text>
                </View>
                <View style = {[styles.amountBox , {width : '28%' }]}>
                    <Text style = {{fontSize : 13}}>12/07/2018</Text>
                </View>
            </View>
                    )
                })
            }
                      
          </View>
      </Drawer>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      amountBox : {justifyContent : 'center' , padding : 4 ,  borderRightColor : '#FC4A1A' , 
      borderRightWidth : 0.5 , alignItems : 'center'},
      chunkPicker : { borderWidth : 1 , borderRadius : 5 ,marginVertical : 12,
        borderColor : '#D8D8D8' , alignSelf  : 'center' , width  : '83%'},
      buttonsStyle : {flex : 1 , justifyContent : 'center' , minHeight  :40,
      alignItems : 'center' , borderColor : '#FFCFC2' , borderWidth : 0.5},
    })
    export default withNavigation(Home)
