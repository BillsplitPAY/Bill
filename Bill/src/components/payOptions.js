import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView,
  TouchableHighlight, Image, TouchableOpacity, TextInput, Animated, TouchableWithoutFeedback} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import Breaker from './breaker';
import {itemListCreator} from '../helperFunctions/pureFunctions';
import PriceBreakdown from '../flexComponents/priceBreakdown'
import BottomButton from '../flexComponents/bottomButton'
import { StackNavigator } from 'react-navigation';
import {gStyle} from '../styles/styles';
import Tipper from './tipper'

const PayOptions = (props) =>{
  return(
    <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>

    <TouchableOpacity onPress={()=>{props.orderState()}} style={{width: '100%', height: '100%', backgroundColor: 'black', opacity: .5, position: 'absolute'}}><Text>test</Text></TouchableOpacity>


    <View style={[styles.optionsContainer, {borderWidth: 2, borderRadius: 7.5}]}>
       <TouchableOpacity onPress={()=>{props.payState()}} style={styles.payOption}>
        <Text style={styles.payText}>Split</Text>
        <Text style={{color: 'black', margin: 10, textAlign: 'center'}}>Split the check with all of your friends, or whomever you choose.</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.payOption}><Text style={styles.payText}>Your Items Only</Text><Text style={{color: 'black', margin: 10, textAlign: 'center'}}>Split the check with all of your friends, or whomever you choose.</Text></TouchableOpacity>
       <TouchableOpacity style={styles.payOption}><Text style={styles.payText}>Custom Selection</Text><Text style={{color: 'black', margin: 10, textAlign: 'center'}}>Split the check with all of your friends, or whomever you choose.</Text></TouchableOpacity>
       <TouchableOpacity style={styles.payOption}><Text style={styles.payText}>Roulette</Text><Text style={{color: 'black', margin: 10, textAlign: 'center'}}>Split the check with all of your friends, or whomever you choose.</Text></TouchableOpacity>
    </View>
    </View>
  )
}

export default PayOptions;

const styles = StyleSheet.create({
  optionsContainer:{height: 'auto', borderWidth: .1, borderColor: 'grey', width: '90%',  flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', bottom:52 },

  payOption:{height: 190, width: '45%', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'white', marginBottom: 20, borderColor: '#212121', borderWidth: 2, borderRadius: 5},

  cartPage:{justifyContent: 'space-between', height: '100%', opacity: 1},

  itemHeader:{textAlign: 'center', fontSize: 14, fontWeight: 'bold', letterSpacing: 5, marginTop: 14},

  payText: {textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}
})
