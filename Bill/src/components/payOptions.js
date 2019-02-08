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

const PayOp = (props)=>{
return(
<TouchableHighlight style={styles.payOption} onPress={props.doThis}>
<View style={{height: '100%', width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: 'white'}}>
   <View style={{height: '100%',  width: '70%', alignItems: 'flex-start'}}><Text style={styles.payText}>{props.title}</Text><Text style={{color: 'black', marginTop: 10}}>{props.description}</Text></View>
   <View style={{height: '100%',  width: '30%', justifyContent: 'center', alignItems: 'center',}}><Image source={props.img} style={{width:'90%', height: '90%'}}/></View>
  </View>
 </TouchableHighlight>
)
}

const PayOptions = (props) =>{
  console.log(props)
  return(
    <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',}}>
    <TouchableHighlight onPress={()=>{props.orderState()}} style={{width: '100%', height: '100%', backgroundColor: 'black', opacity: .7, position: 'absolute'}}><Text>test</Text></TouchableHighlight>
    <View style={styles.optionsContainer}>
      <PayOp title={"Even Split"} description={"Split the check with all of your friends, or whomever you choose."} img={require('../img/split.png')} doThis={()=>{props.navigate('SplitPay')}}/>
      <PayOp title={"Your Items Only"} description={"Split the check with all of your friends, or whomever you choose."} img={require('../img/yourStuff.jpeg')} doThis={()=>{props.navigate('YourStuffPay')}}/>
      <PayOp title={"Pick What You Pay For"} description={"Split the check with all of your friends, or whomever you choose."} img={require('../img/custom.png')} doThis={()=>{props.navigate('PickPay')}}/>
      <PayOp title={"Roulette"} description={"Split the check with all of your friends, or whomever you choose."} img={require('../img/roulette.png')} doThis={()=>{props.navigate('RoulettePay')}}/>
      <PayOp title={"I'm Treatin'!"} description={"Split the check with all of your friends, or whomever you choose."} img={require('../img/treatin.png')} doThis={null}/>
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
