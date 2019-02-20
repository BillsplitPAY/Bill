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

export class TipOption extends Component {
  constructor(props){
    super(props);
    this.state={
      style:{
        backgroundColor: 'white',
        color: 'black'
      },
      tipper:{
      fifteen: {
        selected: false,
        button: {backgroundColor:'white'},
        text: {color: 'black'}
      },
      eighteen: {
        selected: false,
        button: {backgroundColor:'white'},
        text: {color: 'black'}
      },
      twenty: {
        selected: false,
        button: {backgroundColor:'white'},
        text: {color: 'black'}
      },
      cash: {
        selected: false,
        button: {backgroundColor:'white'},
        text: {color: 'black'}
      },
    }
    }
  }
  render(){
    return(
      <TouchableOpacity onPress={()=>{this.setState({style: {backgroundColor: 'black', color: 'white'}})}}style={[styles.tipButton, this.state.style]}><Text style={[this.state.style, {fontSize: 10}]}>15%</Text><Text style={[this.state.style, {fontSize: 18}]}>$3.25</Text></TouchableOpacity>
    )
  }
}

export class Tipper extends Component {
constructor(props){
  super(props);
  this.state = {
    tipper:{
      selected:{backgroundColor: 'black', color:'white'},
      unselected:{backgroundColor: 'white', color:'black'},

      fifteen: {
        selected: false,
        button: {backgroundColor:'white'},
        text: {color: 'black'}
      },
      eighteen: {
        selected: false,
        button: {backgroundColor:'white'},
        text: {color: 'black'}
      },
      twenty: {
        selected: false,
        button: {backgroundColor:'white'},
        text: {color: 'black'}
      },
      cash: {
        selected: false,
        button: {backgroundColor:'white'},
        text: {color: 'black'}
      },

    },
    animValue: new Animated.Value(0)
  }
  this.tipSelector = this.tipSelector.bind(this)
  this.tippy = this.tippy.bind(this)
  // this.tipSelect = this.tipSelect.bind(this)
}

// tipSelect(percent){
//   this.setState({
//     //set state so that pressed item is selected
//     //change backgroundColor to black and text to white
//     //change backgroundColor and text of all other properties to white and black
//     this.setState({[percent]: })
//   })
// }

//function allowing selection of tip option
tipSelector(percent){
    if (this.state.tipper[percent].selected === false){
      Object.keys(this.state.tipper).map((key)=>{
        this.setState({[key]: {button: {backgroundColor: 'white'}}})
      })
    this.setState({tipper: {
      [percent]:{
        selected: true,
        button: {backgroundColor: 'black'},
        text:{color: 'white'}
      }}})
    console.log(this.state)
    }
    else {
    this.setState({tipper: {
      ...this.state.tipper,
      [percent]:{
        selected: false,
        button: {backgroundColor: 'white'},
        text:{color: 'black'}
      }}})
    console.log(this.state)
    }
}

componentDidMount(){
  Animated.timing(this.state.animValue, {duration: 200, toValue: 45}).start()
}

tippy(percent){
  const initialState ={
    fifteen: {
      selected: false,
      button: {backgroundColor:'white'},
      text: {color: 'black'}
    },
    eighteen: {
      selected: false,
      button: {backgroundColor:'white'},
      text: {color: 'black'}
    },
    twenty: {
      selected: false,
      button: {backgroundColor:'white'},
      text: {color: 'black'}
    },
    cash: {
      selected: false,
      button: {backgroundColor:'white'},
      text: {color: 'black'}
    }
  }
return this.setState((prevState)=>{
  return {
    tipper:{
      ...initialState,
      [percent]: {
        button: {backgroundColor: 'black'},
        text: {color: 'white'}
      }
    }

      }
})
}

render(){
  return (
    <Animated.View style={{alignSelf:'center', borderColor: 'blue', borderWidth: '1', width: '99%', height: this.state.animValue,  bottom: 8, flexDirection: 'row',  borderRadius: 8, backgroundColor: 'white'}}>

     <TouchableOpacity onPress={()=>{this.tippy('fifteen')}}style={[styles.tipButton, this.state.tipper.fifteen.button]}><Text style={[this.state.tipper.fifteen.text, {fontSize: 10}]}>15%</Text><Text style={[this.state.tipper.fifteen.text, {fontSize: 18}]}>$5.50</Text></TouchableOpacity>

     <TouchableOpacity onPress={()=>{this.tippy('eighteen')}}style={[styles.tipButton, this.state.tipper.eighteen.button]}><Text style={[styles.tipText, this.state.tipper.eighteen.text, {fontSize: 10}]}>18%</Text><Text style={[this.state.tipper.eighteen.text, {fontSize: 18}]}>$5.50</Text></TouchableOpacity>

     <TouchableOpacity onPress={()=>{this.tippy('twenty')}}style={[styles.tipButton, this.state.tipper.twenty.button]}><Text style={[styles.tipText, this.state.tipper.twenty.text, {fontSize: 10}]}>20%</Text><Text style={[this.state.tipper.twenty.text, {fontSize: 18}]}>$5.50</Text></TouchableOpacity>

     <TouchableOpacity onPress={()=>{this.tippy('cash')}}style={[styles.tipButton, this.state.tipper.cash.button]}><Text style={[styles.tipText, this.state.tipper.cash.text, {fontSize: 10}]}>Cash</Text><Text style={[this.state.tipper.cash.text, {fontSize: 18}]}>Tip</Text></TouchableOpacity>

     <TouchableOpacity style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', }}><Text style={{fontSize: 14, color: 'black'}}>Custom Amount</Text></TouchableOpacity>
    </Animated.View>
  )
}

}

const styles = StyleSheet.create({
  tipButton: {width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', borderColor: 'grey', borderRightWidth: .5},
  tipText: {color: 'black'}
})
