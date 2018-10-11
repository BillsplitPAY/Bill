import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import  RubirosaAntipasto  from './../data/dummyMenu.js'

//import DrawerNav from './drawerNav.js';
import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';

export default class Categories extends Component {
  constructor(props){
    super(props);
    this.mapper = this.mapper.bind(this)

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

  mapper(array){
      return array.map(function(index){
        return (
          <TouchableHighlight style={styles.catBox} onPress={() => this.props.navigation.navigate('Menu', { screen: Menu })}>
            <Text style={styles.catText}>{index.name}</Text>
          </TouchableHighlight>)
      })
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
        <View style={styles.catContainer}>
          {this.mapper(foodCategories)}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    catBox: {
      borderColor: 'black',
      borderWidth: 1,
      //flexDirection: 'column',
      width: '50%',
      paddingTop: 40,
      paddingBottom: 40,
      alignItems: 'center',

    },
    catContainer:{
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap',
    },
    catText:{
      fontSize: 20,

    }
  })
