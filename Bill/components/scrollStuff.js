import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import ScrollItem from './ScrollItem';


export default class ScrollStuff extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log('inside Props65', this.props)
    return (
      <ScrollView horizontal = {true}>
      <View style={styles.scrollContainer}>
      {this.props.items.map( (foodItem, index) => <ScrollItem id={index} food={foodItem} change={this.props.change} /> )}
        <View style = {styles.scr}>
          <Text style = {styles.text}>{this.props.items[0].name}</Text>
        </View>
        
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
    backgroundColor: 'rgba(187, 212, 216, .5)',
    height: 'auto',
    width: 'auto',
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
    //alignItems: 'center',
  },
  selected:{
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(25, 52, 65)',
  },
});
