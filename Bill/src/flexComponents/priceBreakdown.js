import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';

const PriceBreakdown = (props) => {
  return (

    <View style={styles.priceView}>

      <View style={styles.inDesc}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.lineOneText}</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>${props.lineOneValue}</Text>
      </View>

      <View style={styles.inDesc}>
        <Text>{props.lineTwoText}</Text>
        <Text>${props.lineTwoValue}</Text>
      </View>



    </View>
  )

}

export default PriceBreakdown;

const styles = StyleSheet.create({

  priceView:{
    height: 60,
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'white',
    justifyContent: 'space-around',

    //width: '100%',
    margin: 10,
    borderRadius: 5,
  },

  inDesc:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    //marginTop: 8,
    //marginBottom: 20,
  },






})
