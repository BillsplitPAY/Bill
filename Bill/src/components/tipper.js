//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView,
  TouchableHighlight, Image, TouchableOpacity, TextInput, Animated} from 'react-native';


import Breaker from '../flexComponents/breaker';
import {listItemCreator} from '../helperFunctions/pureFunctions';
import PriceBreakdown from '../flexComponents/priceBreakdown'
import BottomButton from '../flexComponents/bottomButton'
import { StackNavigator } from 'react-navigation';
import {gStyle} from '../containers/styles'

export default class Tipper extends Component {
constructor(props){
  super(props);
  this.state = {
    tipper:{
      fifteen: {
        selected: false,
        button: {width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', borderColor: 'grey', borderRightWidth: .5},
        text: {color: 'black'}
      },
      eighteen: {
        selected: false,
        button: {width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', borderColor: 'grey', borderRightWidth: .5},
        text: {color: 'black'}
      },
      twenty: {
        selected: false,
        button: {width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', borderColor: 'grey', borderRightWidth: .5},
        text: {color: 'black'}
      },
      cash: {
        selected: false,
        button: {width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', borderColor: 'grey', borderRightWidth: .5},
        text: {color: 'black'}
      },
    },
    animValue: new Animated.Value(0)
  }
  this.tipSelector = this.tipSelector.bind(this)
}

//function allowing selection of tip option
tipSelector(percent){
    if (this.state.tipper[percent].selected === false){
    this.setState({tipper: {
      ...this.state.tipper,
      [percent]:{
        selected: true,
        button: {...this.state.tipper[percent].button, backgroundColor: 'black'},
        text:{color: 'white'}
      }}})
    console.log(this.state)
    }
    else {
    this.setState({tipper: {
      ...this.state.tipper,
      [percent]:{
        selected: false,
        button: {...this.state.tipper[percent].button, backgroundColor: 'white'},
        text:{color: 'black'}
      }}})
    console.log(this.state)
    }
}

componentDidMount(){
  Animated.timing(this.state.animValue, {duration: 200, toValue: 45}).start()
}



render(){
  return (
    <Animated.View style={{width: 400, height: this.state.animValue, left: 8, bottom: 8, flexDirection: 'row', borderWidth: 0, borderColor: 'grey', borderRadius: 8, backgroundColor: 'white'}}>

     <TouchableOpacity onPress={()=>{this.tipSelector('fifteen')}}style={this.state.tipper.fifteen.button}><Text style={[this.state.tipper.fifteen.text, {fontSize: 10}]}>15%</Text><Text style={[this.state.tipper.fifteen.text, {fontSize: 18}]}>$3.25</Text></TouchableOpacity>

     <TouchableOpacity onPress={()=>{this.tipSelector('eighteen')}}style={this.state.tipper.eighteen.button}><Text style={[this.state.tipper.eighteen.text, {fontSize: 10}]}>18%</Text><Text style={[this.state.tipper.eighteen.text, {fontSize: 18}]}>$5.50</Text></TouchableOpacity>

     <TouchableOpacity onPress={()=>{this.tipSelector('twenty')}}style={this.state.tipper.twenty.button}><Text style={[this.state.tipper.twenty.text, {fontSize: 10}]}>20%</Text><Text style={[this.state.tipper.twenty.text, {fontSize: 18}]}>$8.00</Text></TouchableOpacity>

     <TouchableOpacity onPress={()=>{this.tipSelector('cash')}}style={this.state.tipper.cash.button}><Text style={[this.state.tipper.cash.text, {fontSize: 18}]}>Cash Tip</Text></TouchableOpacity>

     <TouchableOpacity style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', }}><Text style={{fontSize: 14, color: 'black'}}>Custom Amount</Text></TouchableOpacity>
    </Animated.View>
  )
}

}
