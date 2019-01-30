//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import  RubirosaAntipasto  from './../data/dummyMenu.js';
import { Hamburger } from '../src/flexComponents/hamburger'

//import DrawerNav from './drawerNav.js';
import { StackNavigator } from 'react-navigation';
//import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Menu extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
  title: 'Home',
  headerStyle: {height: 0},
};


  render() {
    const { navigate } = this.props.navigation
    const foodCategories = this.props.screenProps.menu[0].response.menu.menus.items[0].entries.items
    //this is an array of objects, each being a category on the menu. the category name is under the name property on each object
    //each object contains a property called entries, which is another object containing the food items in that category
    if (this.props.screenProps.menu[1] !== 'load'){
      return <Text style={styles.loading}>'loading'</Text>
    }
      return (
        <View style={styles.menuPage}>

        <View>
          <StatusBar backgroundColor="blue" barStyle="light-content"/>
        </View>

            <ScrollStuff categories={foodCategories} />


          <ScrollView ref='scrollo'>
            <View style = {styles.items, {borderWidth: 1}}>
              <Items categories={foodCategories} navi={this.props.navigation.navigate}/>
            </View>
          </ScrollView>


        </View>
      );
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
    width: '100%',
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
    flexWrap: 'wrap',
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
