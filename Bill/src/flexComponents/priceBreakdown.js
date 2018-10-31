import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';

const PriceBreakdown = (props) => {
  return (
    <View style={styles.priceView}>

      <View style={styles.inDesc}>
        <Text>{props.lineOneText}</Text>
        <Text>${props.lineOne}</Text>
      </View>

      <View style={styles.inDesc}>
        <Text>{props.lineTwoText}</Text>
        <Text>${props.lineTwo}</Text>
      </View>

      <View style={styles.inDesc}>
        <Text>{props.lineThreeText}</Text>
        <Text>${props.lineThree}</Text>
      </View>

      <View style={styles.inDesc}>
        <Text>{props.lineFourText}</Text>
        <Text>${props.lineFour}</Text>
      </View>

    </View>
  )

}

export default PriceBreakdown;

const styles = StyleSheet.create({

  priceView:{
    height: 100,
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'white',
    justifyContent: 'space-between',

    //width: '100%',
    margin: 10,
    borderRadius: 5,
  },

  inDesc:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginTop: 8,
    //marginBottom: 20,
  },






})
