import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';

export default class ScrollStuff extends Component {
  render() {
    return (
      <ScrollView horizontal = {true}>
      <View style={styles.scrollContainer}>
        <View style = {styles.scr}><Text style = {styles.text}>Recommended</Text></View>
        <View style = {styles.scr}><Text style = {styles.text}>Appetizers</Text></View>
        <View style = {styles.scr}><Text style = {styles.text}>Chicken</Text></View>
        <View style = {styles.scr}><Text style = {styles.text}>Vegetarian</Text></View>
        <View style = {styles.scr}><Text style = {styles.text}>Soup</Text></View>
        <View style = {styles.scr}><Text style = {styles.text}>Sandwiches</Text></View>
        <View style = {styles.scr}><Text style = {styles.text}>Sides</Text></View>
        <View style = {styles.scr}><Text style = {styles.text}>Drinks</Text></View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flexGrow: 1,
    alignItems: 'stretch',
    backgroundColor: 'grey',
    height: 'auto',
    width: 'auto',
  },
  scr: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    //backgroundColor: 'yellow',
    borderBottomWidth: 1,
    borderBottomColor: '#0e0a0ab8',
    //flexGrow: 1,
    //textAlign: 'center',
  },
  text:{
    textAlign: 'center',
    margin: 4,
    fontSize: 12,
    //alignItems: 'center',
  },
  selected:{
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
});
