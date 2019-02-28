import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView,
  TouchableHighlight, Image, TouchableOpacity, TextInput, Animated, TouchableWithoutFeedback} from 'react-native';
import Breaker from '../flexComponents/breaker';
import {listItemCreator} from '../helperFunctions/pureFunctions';
import PriceBreakdown from '../flexComponents/priceBreakdown'
import BottomButton from '../flexComponents/bottomButton'
import { StackNavigator } from 'react-navigation';
import {gStyle} from '../containers/styles';
import Tipper from './tipper'
import { Ionicons } from '@expo/vector-icons';

const PayOp = (props)=>{
return(
<TouchableHighlight style={styles.payOption} onPress={()=>{props.doThis()}}>
<View style={{height: '100%', width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: 'white'}}>
   <View style={{height: '100%',  width: '70%', alignItems: 'flex-start'}}><Text style={styles.payText}>{props.title}</Text><Text style={{color: 'black', marginTop: 10}}>{props.description}</Text></View>
   <View style={{height: '100%',  width: '30%', justifyContent: 'center', alignItems: 'center',}}><Image source={props.img} style={{width:'90%', height: '90%'}}/></View>
  </View>
 </TouchableHighlight>
)
}

const PayOptions = (props) =>{

  return(
    <View style={{width: '100%', height: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'flex-start', zIndex: 3}} >

      <TouchableHighlight style={{position:'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderColor: 'red', backgroundColor: 'rgba(0,0,0,.8)'}} onPress={()=>{props.orderState()}}>
      <View></View>
      </TouchableHighlight>

      <View style={{backgroundColor: '#212121', borderBottomColor: 'white', borderBottomWidth: .5, marginBottom: 9, height: 'auto', width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10}}>
        <TouchableWithoutFeedback onPress={()=>{props.orderState()}}><View style={{flexDirection: 'row', alignItems: 'center'}}><Ionicons name="ios-arrow-back" size={40} style={{color:'white'}}/></View></TouchableWithoutFeedback>
        <Text style={{fontFamily: 'Futura', fontSize: 20, color: 'white'}}>Select a Payment Option</Text>
      </View>

      <View style={styles.optionsContainer}>
        <PayOp style={{opacity: 1}}title={"Even Split"} description={"Split the check with all of your friends, or whomever you choose."} img={require('../img/split.png')} orderState={props.orderState} doThis={()=>{props.navigate('SplitPay')}}/>
        <PayOp title={"Your Items Only"} description={"Split the check with all of your friends, or whomever you choose."} img={require('../img/yourStuff.jpeg')} orderState={props.orderState} doThis={()=>{props.navigate('YourStuffPay')}}/>
        <PayOp title={"Pick What You Pay For"} description={"Split the check with all of your friends, or whomever you choose."} img={require('../img/custom.png')} orderState={props.orderState} doThis={()=>{props.navigate('PickPay')}}/>
        <PayOp title={"Roulette"} description={"Split the check with all of your friends, or whomever you choose."} img={require('../img/roulette.png')} orderState={props.orderState} doThis={()=>{props.navigate('RoulettePay')}}/>
        <PayOp title={"I'm Treatin'!"} description={"Split the check with all of your friends, or whomever you choose."} img={require('../img/treatin.png')} orderState={props.orderState} doThis={null}/>
      </View>

    </View>
  )
}

export default PayOptions;

const styles = StyleSheet.create({
  optionsContainer:{height: 'auto', width: '93%',  justifyContent: 'space-between', alignItems: 'center'},

  payOption:{height: 100, width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: 'white', borderColor: '#212121', borderWidth: 2, borderRadius: 5, marginBottom: 20, paddingLeft: 5},

  cartPage:{justifyContent: 'space-between', height: '100%', opacity: 1},

  itemHeader:{textAlign: 'center', fontSize: 14, fontWeight: 'bold', letterSpacing: 5, marginTop: 14},

  payText: {textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}
})
