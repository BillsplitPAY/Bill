//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView,
  TouchableHighlight, Image, TouchableOpacity, TextInput, Animated} from 'react-native';


export const SplitBreakdown = (props) =>{
  return (
    <View style={styles.priceView}>
    <Text style={{textAlign: 'center', fontSize: 14}}>Splitting Check Four Ways</Text>

      <View style={styles.inDesc}>
        <Text>Order Total</Text>
        <Text>${props.lineOneValue}</Text>
      </View>

      <View style={styles.inDesc}>
        <Text>Tax</Text>
        <Text>${props.lineTwoValue}</Text>
      </View>

      <View style={styles.inDesc}>
        <Text>Split Amount</Text>
        <Text>$0.00</Text>
      </View>

      <View style={styles.inDesc}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Subtotal</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>$0.00</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  priceView:{
    height: 120,
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
    paddingLeft: 20,
    paddingRight: 20,
    //marginTop: 8,
    //marginBottom: 20,
  },






})
