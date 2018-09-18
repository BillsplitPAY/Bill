//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import  RubirosaAntipasto  from './../data/dummyMenu.js'

//import DrawerNav from './drawerNav.js';
import { StackNavigator } from 'react-navigation';
//import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Menu extends Component {
  constructor(props){
    super(props);
  }
    static navigationOptions = {
      title: "Spring Garden",
  
      headerStyle: {
        backgroundColor: 'black',
    },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
    },
  }



  render() {
    const { navigate } = this.props.navigation
    const foodCategories = this.props.screenProps.menu[0].response.menu.menus.items[2].entries.items
    //this is an array of objects, each being a category on the menu. the category name is under the name property on each object
    console.log(this.props)

      return (
        <View style={styles.menuPage}>

        <View>
          <StatusBar backgroundColor="blue" barStyle="light-content"/>
        </View>

            <ScrollStuff categories={foodCategories} />


          <ScrollView ref='scrollo'>
            <View style = {styles.items}>
              <Items categories={foodCategories} navi={this.props.navigation.navigate}/>
            </View>
          </ScrollView>


        </View>
      );
    }

  componentDidMount(){

    // fetch('https://api.foursquare.com/v2/venues/4cc6222106c25481d7a4a047/menu?client_id=KUZ5DS21RPAGXYPZGDG1R2ACKA43X2SLTY3VNX5WN3PZLYYS&client_secret=WJ2HM3V5YFXSCDQSIVBDCJUCCSQLPRAWLXIZAXWFIRMGALVS&v=20180323', {
    //   mode: 'cors',
    // })
    // .then((resp) => resp.json())
    // .then((data) => {this.props.screenProps.fetch(data); console.log(this.props)})
    console.log(this.props);
  }
  }


const styles = StyleSheet.create({
  menuPage: {
    display: 'flex',
    //flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    height: 'auto',
    width: 375,
  },
  // scroller: {
  //   height: 36,
  //   width: 'auto',
  //   //flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  //   //backgroundColor: 'green',
  //   //borderWidth: 0,
  //   //borderColor: 'black',
  // },
  items: {
    position: 'relative',
    flexDirection: 'column',
    height: 'auto',
    backgroundColor: 'white',
    //borderWidth: 2,
    borderColor: 'blue',
  },
  button:{
    flexDirection: 'column',
    backgroundColor: 'rgb(25, 52, 65)',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
   buttonText:{
     color: 'white',
     fontWeight:'bold',
   },
   price:{
     alignSelf: 'flex-end',
     color: 'white',
   }
});

//<View style={styles.header}><Text style={styles.headerText}>Spring Garden</Text></View>
//https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624

// <TouchableHighlight onPress={() => navigate('DrawerOpen')} style={[styles.button, {backgroundColor: '#7567B1'}]}>
//   <Text> Open Drawer </Text>
// </TouchableHighlight>

// fetch('https://api.foursquare.com/v2/venues/search?client_id=KUZ5DS21RPAGXYPZGDG1R2ACKA43X2SLTY3VNX5WN3PZLYYS&client_secret=WJ2HM3V5YFXSCDQSIVBDCJUCCSQLPRAWLXIZAXWFIRMGALVS&v=20180323&limit=100&radius=10000&ll=40.7,74.0&categoryId=4bf58dd8d48988d1c5941735&intent=browse', {
//   mode: 'cors',
// })
// .then((resp) => resp.json())
// .then((data) => {console.log(data)})
//
// fetch('https://api.foursquare.com/v2/venues/4cc6222106c25481d7a4a047/menu?client_id=KUZ5DS21RPAGXYPZGDG1R2ACKA43X2SLTY3VNX5WN3PZLYYS&client_secret=WJ2HM3V5YFXSCDQSIVBDCJUCCSQLPRAWLXIZAXWFIRMGALVS&v=20180323', {
//   mode: 'cors',
// })
// .then((resp) => resp.json())
// .then((data) => {console.log(data)})


// <TouchableOpacity style={styles.button} onPress={()=>{navigate('ScreenFour'); console.log(this.props.propers)}}>
//   <Text style={styles.buttonText}>View Cart</Text>
//
// </TouchableOpacity>
