import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';

export default class ScrollStuff extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log('inside Props65', this.props)
    return (
      <View style={styles.scroller}>
        <ScrollView horizontal = {true}>
        <View style={styles.scrollContainer}>
          <View style = {styles.scr}><Text style = {styles.text}>{this.props.categories[0].name}</Text></View>
          <View style = {styles.scr}><Text style = {styles.text}>{this.props.categories[1].name}</Text></View>
          <View style = {styles.scr}><Text style = {styles.text}>{this.props.categories[2].name}</Text></View>
          <View style = {styles.scr}><Text style = {styles.text}>{this.props.categories[3].name}</Text></View>
          <View style = {styles.scr}><Text style = {styles.text}>{this.props.categories[4].name}</Text></View>
          <View style = {styles.scr}><Text style = {styles.text}>{this.props.categories[5].name}</Text></View>
          <View style = {styles.scr}><Text style = {styles.text}>{this.props.categories[6].name}</Text></View>
        </View>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flexGrow: 1,
    alignItems: 'stretch',
    backgroundColor: '#303030',
    height: 'auto',
    width: 'auto',
    borderBottomWidth: 2,
    borderBottomColor: '#424242',
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
  scr: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    //backgroundColor: 'yellow',
    //borderBottomWidth: 1,
    //borderBottomColor: '#0e0a0ab8',
    //flexGrow: 1,
    //textAlign: 'center',
  },
  text:{
    textAlign: 'center',
    marginLeft: 14,
    marginRight: 14,
    fontSize: 11,
    color: 'white',
    //alignItems: 'center',
  },
  selected:{
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(25, 52, 65)',
  },
});
