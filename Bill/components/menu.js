//this is the content page
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Items from './items.js';
import ScrollStuff from './scrollStuff.js';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.menuPage}>
        <View style = {styles.header}><Text style={styles.headerText}>Spring Garden</Text></View>
        <View style = {styles.scroller}><ScrollStuff /></View>
        <View style = {styles.items}>
        <Items /><Items /><Items /><Items /><Items /><Items /><Items /><Items /><Items />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuPage: {
    display: 'flex',
    //flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 'auto',
    width: 375,
  },
  header: {
    height: 75,
    textAlign: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    //borderColor: 'red',
  },
  scroller: {
    height: 36,
    width: 'auto',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'black',
  },
  items: {
    position: 'relative',
    flexDirection: 'column',
    height: 'auto',
    backgroundColor: 'rgba(100, 119, 404, .4)',
    //borderWidth: 2,
    borderColor: 'blue',
  },
  headerText:{
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,

  },
});
