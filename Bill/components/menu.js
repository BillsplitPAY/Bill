//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import  RubirosaAntipasto  from './../data/dummyMenu.js'

//import DrawerNav from './drawerNav.js';
import { StackNavigator } from 'react-navigation';

//Pass in 4sqaure API Keys below
var foursquare = require('react-foursquare')({
  clientID: '',
  clientSecret: ''  
});

var params = {
  'venue_id' : '4cc6222106c25481d7a4a047'
}

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {results: 'naw', 
    load: 'naw', 
    current: '', 
    menuItems: ["tom", 'jerry'],
    menuIndex: 0,
    dummyMenu: [],

  }

  this.changeIndex = this.changeIndex.bind(this);
  }
  static navigationOptions = {
    title: "Rubirosa"
  }

  changeIndex(number) {
    this.setState({menuIndex: number})
    console.log('shit changed', this.state.menuIndex)
  }

  componentDidMount(){
    this.setState({dummyMenu: RubirosaAntipasto.response.menu.menus.items[this.state.menuIndex]})

    foursquare.venues.getMenu(params)
      .then(res=> {
         // console.log('regular: ',res.response.menu.menus.items)
        console.log('brunchMenu: ', res)
        this.setState({ menuItems: res });
      });


    fetch('https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624', {
      headers: {'user-key': '276bd7f40b392f21cf03e6f4796431cd'}
    })
          .then((resp) => resp.json())
          .then((data) => {
            this.props.screenProps.fetch(data);
            console.log(data);
            //this.setState({load: 'yep',});
            //console.log(this.state);
          });
    //console.log(this.state);
  }

  render() {
    const { navigate } = this.props.navigation

     console.log('Menu1', this.state.dummyMenu.entries.items )
     console.log('MenuIndex', this.state.menuIndex)
     console.log('navigation', navigate)
     


    if (this.props.screenProps.yo.load === 'naw'){
      return(
        <View style={styles.wait}><Text>'Nigga Wait!'</Text></View>
      )
    }
    else{
      return (
        <View style={styles.menuPage}>
          <View style={styles.scroller}>
            <ScrollStuff items={this.state.dummyMenu.entries.items} change={this.changeIndex}/>
          </View>
          <ScrollView>
            <View style = {styles.items}>
              <Items item={this.props.screenProps.yo.results.daily_menus[1].daily_menu} food={this.state.dummyMenu.entries.items} current={this.state.menuIndex}  navi={navigate}/>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={()=>{navigate('ScreenFour'); console.log(this.props.propers)}}>
            <Text style={styles.buttonText}>View Order</Text>

          </TouchableOpacity>
        </View>
      );
    }
  }

  }


const styles = StyleSheet.create({
  menuPage: {
    display: 'flex',
    //flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    height: 'auto',
    width: 375,
  },
  scroller: {
    height: 36,
    width: 'auto',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'green',
    //borderWidth: 0,
    //borderColor: 'black',
  },
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
