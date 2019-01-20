//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView,
  TouchableHighlight, Image, TouchableOpacity, TextInput, Animated} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import Breaker from './breaker';
import {itemListCreator} from '../helperFunctions/pureFunctions';
import PriceBreakdown from '../flexComponents/priceBreakdown'
import BottomButton from '../flexComponents/bottomButton'
import { StackNavigator } from 'react-navigation';
import {gStyle} from '../styles/styles'

export default class Order extends Component {
  constructor(props){
    super(props);
    this.state ={
      screenBlurrer: {opacity: 1, zIndex: -1, borderColor: 'red', borderWidth: 2},
      //set opacity to .5, zIndex to 1
      payOptions: {zIndex: -2},
      //set zIndex to 2

    }
    // this.state.anim = new Animated.Value(0);
    // this.state.payOption = this.state.anim.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [-1, 2]
    // });
    // this.state.screenBlur = this.state.anim.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [1, .5]
    // });
    this.totalAdder = this.totalAdder.bind(this);
    //this.payOptionRender = this.payOptionRender.bind(this)
    // this.animator = this.animator.bind(this)
  }

  static navigationOptions = {
    title: "Your Order"
  }

  // animator(){
  //     if (this.state.anim._value === 0){
  //         return Animated.timing(this.state.anim, {duration: 200, toValue: 1,})
  //     }
  //     else{
  //         return Animated.timing(this.state.anim, {duration: 200, toValue: 0,})
  //     }
  // }

totalAdder(acc, itemObj){
  return acc + itemObj.price
}

  render() {
    const { navigate } = this.props.navigation
    const order = this.props.screenProps.order
    const subTotal = order.reduce(this.totalAdder, 0)
    const tax = subTotal * .07
    const total = subTotal + tax

    return (
       <View style={styles.cartPage} blurRadius={1}>

       <TouchableOpacity onPress={()=>{console.log(this.state); this.setState({screenBlurrer:{opacity: 1, zIndex: 0, borderColor: 'blue', borderWidth: 2}, payOptions:{zIndex: -2}})}} style={[this.state.screenBlurrer, {width: '100%', height: '100%', position: 'absolute',}]} >
       <Image source={{uri: 'https://dummyimage.com/300x600/e7e8eb/e7e8eb.jpg'}} style={{height: '100%', width: '100%'}}/>
       </TouchableOpacity>
         <ScrollView>
           <View>
           <Text style={styles.itemHeader}>Your Items</Text>
             {itemListCreator(this.props.screenProps.order)}
             <Text style={styles.itemHeader}>Rob's Items</Text>
             {itemListCreator(this.props.screenProps.order)}
             <Text style={styles.itemHeader}>Lee's Items</Text>
             {itemListCreator(this.props.screenProps.order)}
             <Text style={styles.itemHeader}>Luc's Items</Text>
             {itemListCreator(this.props.screenProps.order)}
           </View>
       </ScrollView>

       <PriceBreakdown lineOneText={'Subtotal'} lineOneValue={subTotal} lineTwoText={'Tax'} lineTwoValue={tax.toFixed(2)} />
       <BottomButton buttonText={'Checkout'} doThis={() => {this.setState({screenBlurrer:{opacity: .5, zIndex: 1, borderColor: 'red', borderWidth: 2}, payOptions:{zIndex: 2}})}} buttonPrice={total.toFixed(2)}/>

       <Animated.View style={[styles.hidden, this.state.payOptions, {borderWidth: 2, borderRadius: 7.5}]}>
          <View style={styles.payOption}><Text style={styles.payText}>Split</Text></View>
          <View style={styles.payOption}><Text style={styles.payText}>Your Items Only</Text></View>
          <View style={styles.payOption}><Text style={styles.payText}>Custom Selection</Text></View>
          <View style={styles.payOption}><Text style={styles.payText}>Roulette</Text></View>
       </Animated.View>

     </View>
      );
    }

  }

// <BottomButton buttonText={'Checkout'} doThis={() => {this.animator().start(); console.log(this.state)}} buttonPrice={total.toFixed(2)}/>


  const styles = StyleSheet.create({
    hidden:{position: 'absolute', height:'auto', borderColor: 'black', width: '95%',  left: 10, right: 'auto', top: 500, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between', },

    payOption:{height: 80, width: '25%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRightWidth: .5, borderRightColor: 'black',},

    cartPage:{justifyContent: 'space-between', height: '100%', opacity: 1},

    itemHeader:{textAlign: 'center', fontSize: 14, fontWeight: 'bold', letterSpacing: 5, marginTop: 14},

    payText: {textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}


  })
