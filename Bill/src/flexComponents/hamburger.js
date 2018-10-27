import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import { withNavigation, DrawerActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


class Hamburger extends Component{
  constructor(props){
    super(props)
  }
  static navigationOptions = {
         drawerLabel: () => null
    }
  render(){
    return (
    <TouchableOpacity style={styles.burgerContainer} onPress={() => {this.props.navigation.openDrawer()}}><Ionicons style={styles.hamburger}name="ios-menu" size={32} /></TouchableOpacity>
  )
}
}

const styles = StyleSheet.create({
burgerContainer:{
  //justifyContent: 'flex-start',
  height: '100%'
},
  hamburger: {
    color: 'white',
    fontSize: 30,
    marginRight: 15,
    marginTop: -20,
    //justifyContent: 'center',
  }
})

export default withNavigation(Hamburger);
