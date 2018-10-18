import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import { withNavigation, DrawerActions } from 'react-navigation';


class Hamburger extends Component{
  constructor(props){
    super(props)
  }
  static navigationOptions = {
         drawerLabel: () => null
    }
  render(){
    return (
    <TouchableOpacity onPress={() => {this.props.navigation.openDrawer()}}><Text style={styles.hamburger}>III</Text></TouchableOpacity>
  )
}
}

const styles = StyleSheet.create({
  hamburger: {
    color: 'white',
    fontSize: 30,
    marginLeft: 10,
  }
})

export default withNavigation(Hamburger);
