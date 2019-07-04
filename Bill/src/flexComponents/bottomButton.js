import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';


const BottomButton = (props) => {

  return (
    <View >
    <TouchableOpacity style={styles.button} onPress={()=>{props.doThis()}}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
      <Text style={styles.buttonPrice}>${props.buttonPrice}</Text>
    </TouchableOpacity>
    </View>
  )
}
export default BottomButton

export const CheckoutButton = (props)=>{
  return(
    <View>
    <TouchableOpacity style={styles.button} onPress={()=>{props.payOptionToggle()}}>
      <Text style={styles.buttonText}>Checkout</Text>
      <Text style={styles.buttonPrice}>{props.buttonPrice}</Text>
    </TouchableOpacity>
    </View>
  )
}

export const PayButton = (props)=>{
  return (
    <View>
    <TouchableOpacity style={[styles.button, {backgroundColor: 'green',}]} onPress={()=>{props.navigate()}}>
      <Text style={[styles.buttonText, {color: 'black', left: 25,}]}>Pay</Text>
      <Text style={[styles.buttonPrice, {color:'black'}]}>{props.buttonPrice}</Text>
    </TouchableOpacity>
    </View>
  )
}

export const EditButton = (props)=>{
  return (


    <TouchableOpacity style={[styles.button, {backgroundColor: 'black', justifyContent:'center', marginTop: 5}]} onPress={()=>{props.doThis()}}>
      <Text style={[styles.buttonText, {color: 'white', marginLeft:0}]}>Confirm Changes</Text>
    </TouchableOpacity>

  )
}



const styles = StyleSheet.create({

  button:{
    flexDirection:'column',
    backgroundColor: 'black',
    justifyContent:'center',
    height: 45,
    width: '99%',
    alignSelf: 'center',
    marginBottom: 2,
    borderRadius: 5,
  },
   buttonText:{
     color: 'white',
     fontWeight:'bold',
     fontSize: 17,
     alignSelf:'center',
     position:'relative',
     top:'25%'




   },
   buttonPrice:{

     color: '#8bc34a',
     fontWeight:'bold',

     fontSize: 17,
     alignSelf: 'flex-end',
     bottom:'25%',
     right:'2.5%',
     position:'relative'
   },

})
