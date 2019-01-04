import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';

export default class PayType extends Component{
  constructor(props){
    super(props);
  }
  render(){

    return(
    <View style={styles.page}>
    <Text style={styles.payTypeText}>How do you want to pay?</Text>
    <View style={styles.buttonBox}>
      <TouchableHighlight style={styles.buttonWrap} onPress={()=>{this.props.navigation.navigate('EvenSplit')}}><Button title='Even Split' style={styles.buttonText} /></TouchableHighlight>
      <TouchableHighlight style={styles.buttonWrap} onPress={()=>{this.props.navigation.navigate('YourStuff')}}><Button title='Pay For Your Stuff' style={styles.buttonText} /></TouchableHighlight>
      <TouchableHighlight style={styles.buttonWrap} onPress={()=>{this.props.navigation.navigate('CustomAmount')}}><Button title='Custom Amount' style={styles.buttonText} /></TouchableHighlight>
      <TouchableHighlight style={styles.buttonWrap}><Button title='Roulette' style={styles.buttonText} /></TouchableHighlight>
    </View>
  </View>
  )
  }
}

const defaultHeight = '90%';

const pageDefault = {
  height: defaultHeight,
  borderWidth: 1,
  borderColor: 'red',
  marginTop: 35,
}

const styles = StyleSheet.create({
  page: pageDefault,

  payTypeText:{
    textAlign: 'center',
    fontSize: 28,
    marginTop: 20,
  },
  buttonBox:{
    flexDirection: 'column',
    width: '100%',

    justifyContent:'space-around',
    height: 'auto',
    alignItems: 'center',
    marginTop: 20
  },
  buttonWrap:{
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: 'auto',
  },
  buttonText:{
    borderColor: 'black',
    borderWidth: 1,
  },

})
