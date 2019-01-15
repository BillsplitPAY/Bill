import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import { Font } from 'expo';

export default class ScrollStuff extends Component {
  constructor(props){
    super(props);
    this.itemCreator = this.itemCreator.bind(this);
  }


itemCreator(array){
  return array.map((index) => {

    return <View key={index.name} style = {styles.scr}><Text style = {styles.text}>{index.name}</Text></View>
  })
}

  render() {
    
    return (
      <View style={styles.scroller}>
        <ScrollView horizontal = {true}>
        <View style={styles.scrollContainer}>
          {this.itemCreator(this.props.categories)}
        </View>
      </ScrollView>
    </View>
    );
  }
  // componentDidMount(){
  //   Font.loadAsync({'open-sans-bold': require('../assets/fonts/TitilliumWeb-Regular.ttf'),
  //   });
  // }
  shouldComponentUpdate(){
    return true;
  }
}

const styles = StyleSheet.create({
  scrollContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flexGrow: 1,
    alignItems: 'stretch',
    backgroundColor: '#212121',
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
    fontSize: 12,
    color: 'white',
    fontFamily: 'Futura'
    //alignItems: 'center',
  },

  selected:{
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(25, 52, 65)',
  },
});
