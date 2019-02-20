import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';

export const PriceBreakdown = (props) => {
  return (
    <View style={styles.priceView}>
    {props.children}
      <View style={styles.inDesc}>
        <Text style={{marginTop: 8, fontSize: 18, fontWeight: 'bold'}}>Subtotal</Text>
        <Text style={{marginTop: 8, fontSize: 18, fontWeight: 'bold'}}>${props.orderTotal}</Text>
      </View>
      <View style={styles.inDesc}>
        <Text style={{marginTop: 8, fontSize: 14}}>Tax</Text>
        <Text style={{marginTop: 8, fontSize: 14}}>${props.orderTax}</Text>
      </View>
      <View style={styles.inDesc}>
        <Text style={{marginTop: 8, fontSize: 18, fontWeight: 'bold'}}>Order Total</Text>
        <Text style={{marginTop: 8, fontSize: 18, fontWeight: 'bold'}}>${props.orderTotal + props.orderTax}</Text>
      </View>
    </View>
  )
}

export const CartBreakdown = (props) => {
  const cartTotal = (props.screenProps.cart.reduce((acc, item)=>{return acc+item.price}, 0))
  const tax = (cartTotal * .07)
  return(
    <View style={styles.priceView}>
      <View style={styles.inDesc}>
        <Text style={{marginTop: 8, fontSize: 14}}>Cart Subtotal</Text>
        <Text style={{marginTop: 8, fontSize: 14}}>${cartTotal.toFixed(2)}</Text>
      </View>
      <View style={styles.inDesc}>
        <Text style={{marginTop: 8, fontSize: 14}}>Tax</Text>
        <Text style={{marginTop: 8, fontSize: 14}}>${tax.toFixed(2)}</Text>
      </View>
      <View style={styles.inDesc}>
        <Text style={{marginTop: 8, fontSize: 18, fontWeight: 'bold'}}>Cart Total</Text>
        <Text style={{marginTop: 8, fontSize: 18, fontWeight: 'bold'}}>${(cartTotal + tax)}</Text>
      </View>
    </View>
  )
}



export const OrderBreakdown = (props) => {
  const orderTotal = (props.screenProps.order.reduce((acc, item)=>{return acc+item.price}, 0))
  const orderTax = (orderTotal * .07)
  return(
    <PriceBreakdown orderTotal={orderTotal}>
        <Text style={{textAlign: 'center', fontSize: 18}}>Splitting {'Four'} Ways</Text>
    </PriceBreakdown>
  )
}

export const SplitBreakdown = (props) => {
  const orderTotal = (props.screenProps.order.reduce((acc, item)=>{return acc+item.price}, 0))
  const orderTax = (orderTotal * .07)
  return(
    <PriceBreakdown orderTotal={orderTotal} orderTax={orderTax.toFixed(2)}>
        <Text style={{textAlign: 'center', fontSize: 18}}>Splitting {'Four'} Ways</Text>
    </PriceBreakdown>
  )
}

export const YourBreakdown = (props) => {
  return(
    <PriceBreakdown subtotal={props.subtotal}>
        <Text style={{textAlign: 'center', fontSize: 18}}>You ordered {'four'} items</Text>
    </PriceBreakdown>
  )
}

export const RouletteBreakdown = (props) => {
  return(
    <PriceBreakdown subtotal={props.subtotal}>
        {null}
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
