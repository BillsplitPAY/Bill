import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';

export default class PayType extends Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(global)

    return(
    <View>
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

const styles = StyleSheet.create({
  buttonBox:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    height: '100%',
    alignItems: 'center',
    marginTop: 20
  },
  buttonWrap:{
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '50%',
    height: '20%',
  },
  buttonText:{
    borderColor: 'black',
    borderWidth: 1,
  },
  payTypeText:{
    textAlign: 'center',
    fontSize: 28,
    marginTop: 20,
  }
})
