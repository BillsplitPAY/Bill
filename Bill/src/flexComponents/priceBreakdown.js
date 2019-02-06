import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';

export const PriceBreakdown = (props) => {
  return (
    <View style={styles.priceView}>
    {props.children}
      <View style={styles.inDesc}>
        <Text style={{marginTop: 8, fontSize: 18, fontWeight: 'bold'}}>Subtotal</Text>
        <Text style={{marginTop: 8, fontSize: 18, fontWeight: 'bold'}}>${props.lineOneValue}</Text>
      </View>
      <View style={styles.inDesc}>
        <Text style={{marginTop: 8, fontSize: 14}}>Tax</Text>
        <Text style={{marginTop: 8, fontSize: 14}}>${props.lineTwoValue}</Text>
      </View>
    </View>
  )
}

export const SplitBreakdown = (props) => {
  return(
    <PriceBreakdown subtotal={props.subtotal}>
        <Text style={{textAlign: 'center', fontSize: 24}}>Even Split</Text>
        <Text style={{textAlign: 'center', fontSize: 18}}>Splitting {'Four'} Ways</Text>
    </PriceBreakdown>
  )
}

export const YourBreakdown = (props) => {
  return(
    <PriceBreakdown subtotal={props.subtotal}>
        <Text style={{textAlign: 'center', fontSize: 24}}>Your Stuff</Text>
        <Text style={{textAlign: 'center', fontSize: 18}}>You ordered {'four'} items</Text>
    </PriceBreakdown>
  )
}

export const RouletteBreakdown = (props) => {
  return(
    <PriceBreakdown subtotal={props.subtotal}>
        <Text style={{textAlign: 'center', fontSize: 24}}>Roulette</Text>
    </PriceBreakdown>
  )
}

export const PickBreakdown = (props) => {
  return(
    <PriceBreakdown subtotal={props.subtotal}>
        <Text style={{textAlign: 'center', fontSize: 24}}>Custom Selection</Text>
        <Text style={{textAlign: 'center', fontSize: 18}}>Select the items you wish to pay for</Text>
    </PriceBreakdown>
  )
}

const styles = StyleSheet.create({

  priceView:{
    height: 'auto',
    paddingTop: 5,
    paddingBottom: 5,
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
