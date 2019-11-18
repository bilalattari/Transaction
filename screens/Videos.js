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
class Videos extends React.Component {
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
        <CustomHeader home title={'VIDEOS'} add = {true} onClickAdd = {()=> this.props.navigation.navigate("AddVideos")} />
        <SearchInput value  = {this.state.search}  onChangeText = {(text)=> this.setState({search : text})} placeholder= {"Search Videos"} />
        <ScrollView>
            <FlatList 
            data = {['1' ,'2' , '3']}
            keyExtractor = {(item)=> item}
            renderItem = {({item , index})=>
        <View>
            <View style = {styles.videoContainer}>
                 <TouchableOpacity>
                <Icon type = {"font-awesome"} name  ={"play-circle"} color = {"#fff"} size = {50} />
                 </TouchableOpacity>
            </View>
            <View style = {styles.videoTitleRow}>
                <Text style = {styles.videoTitle}>Video Title</Text>
                <View style = {{flexDirection : "row"}}>
                    <View style = {styles.videoIcon}/>
                    <View style = {styles.videoIcon}/>
                    <View style = {styles.videoIcon}/>
                </View>
                </View>
             <View style = {{flexDirection : "row" , padding : 10 , backgroundColor : "skyblue" , alignItems : "center"}}>
             <Image source = {require('../assets/avatar.png')} 
             style = {styles.msgImage} />
                <Text style = {[styles.videoTitle , {fontSize : 17}]}>User Name</Text>
                 </View>
                <Text style = {[styles.videoTitle  , {paddingLeft : 12 , marginVertical : 12}]}>COMMENTS</Text>
                {
                    ['1' ,'2' , '3'].map((data , index)=>
                    
                <View key = {index} style = {{flexDirection : "row" , padding : 10 , alignItems : "center" ,}}>
             <Image source = {require('../assets/avatar.png')} 
              style = {[styles.msgImage , {borderRadius : 4}]} />
            <Text style = {[styles.videoTitle , {flex : 1}]}>Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum</Text>
                </View>
                    )
                }
            </View>
            }
            />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
  videoIcon : {height : 20 , width : 20 , marginHorizontal : 2, borderRadius : 25 , backgroundColor : "skyblue"},
  videoTitle : {fontWeight : "bold" , color : themeColor , fontSize : 16},
  videoTitleRow : {flexDirection : "row" , justifyContent : "space-between" , marginHorizontal : 15 ,
   marginVertical : 6},
  videoContainer : {height : 200 , width : "100%" , justifyContent : "center" , alignItems : "center" ,
  backgroundColor : "skyblue"},
  msgImage : {height : 45 , width : 45 , borderRadius : 7 , marginHorizontal : 10},
})
export default withNavigation(Videos)
 