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
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
 class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        selected: "deposit",
        tableHead: ['MT LOGIN', 'AMOUNT', 'STATUS', 'CREATED DATE'],
        tableData: [
        ['12132', '$100', 'Approved', '4'],
        ['12233', '$100', 'Approved', 'd'],
        ['13232', '$1000', 'Approve', '456\n789'],
        ['12213', '$12000', 'Approved', 'd'],
        ['12213', '$12000', 'Approved', 'd'],
        ['12213', '$12000', 'Approved', 'd'],
        ['12213', '$12000', 'Approved', 'd'],
      ]
        }
  }
  static navigationOptions = {
    header: null,
};

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
    render() {
        let data = ['1','2','3']
        const state = this.state;
        return (
            
            <View style={styles.container}>
              <CustomHeader  title = {'Transactions'} openMenu = {()=> this.props.navigation.navigate('Home')} />
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
            <ScrollView>
            <Table borderStyle={{borderWidth: 1, borderColor: '#FC4A1A' }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
                </ScrollView>
     
          </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      head: { height: 40, backgroundColor: '#f1f8ff' , borderColor : '#FC4A1A' },
      text: { margin: 6 },
      amountBox : {justifyContent : 'center' , padding : 4 ,  borderRightColor : '#FC4A1A' , 
      borderRightWidth : 0.5 , alignItems : 'center'},
      chunkPicker : { borderWidth : 1 , borderRadius : 5 ,marginVertical : 12,
        borderColor : '#D8D8D8' , alignSelf  : 'center' , width  : '83%'},
      buttonsStyle : {flex : 1 , justifyContent : 'center' , minHeight  :40,
      alignItems : 'center' , borderColor : '#FFCFC2' , borderWidth : 0.5},
    })
    export default withNavigation(Home)
