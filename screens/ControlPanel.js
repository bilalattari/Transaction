import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,Image,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
class ControlPanel extends React.Component {
  constructor(props){
    super(props)
    this.setState = {
    }
  }
  static navigationOptions = {
    header: null,
};
drawerheading = (icon , text , route )=>{
    return(
        <TouchableOpacity style={{flexDirection : 'row'  , alignItems : 'center'  , margin : 8 }}>
            <Icon name = {icon} size = {23} style = {{marginHorizontal : 5}} />
            <Text style = {{fontSize : 18}}> {text} </Text>
            </TouchableOpacity>
    )
}
    render() {
        console.log(this.props.navigation)
        return (
            <View style={styles.container}>
                <View style={{flex : 2 , justifyContent : 'center' , alignItems : "center"}}>
                    <Image source = {require('../assets/avatar.png' )} 
                    style = {{height : '70%' , width : "70%" , resizeMode : 'contain' , borderRadius  : 125}} />
                    </View>
                    <View style={{flex : 3}}>
                        {this.drawerheading('play' , 'Home' , 'Play')}
                        {this.drawerheading('play' , 'My Profile' , 'Profile')}
                        {this.drawerheading('play' , 'Transactions' , 'Play')}
                        {this.drawerheading('play' , 'Transfer Funds' , 'Play')}
                        {this.drawerheading('play' , 'Request Withdrawel' , 'Play')}
                        {this.drawerheading('play' , 'Upload Documents' , 'Play')}
                        {this.drawerheading('play' , 'Change Account Password' , 'Play')}
                        {this.drawerheading('play' , 'Add new TA account' , 'Play')}
                    </View>
           </View>
        );
      }   
    }   
 
    export default (ControlPanel);
    
    const styles = StyleSheet.create({
      container: {
          flex : 1,
        flexDirection: 'column',
        backgroundColor : 'white'
      },
    })
