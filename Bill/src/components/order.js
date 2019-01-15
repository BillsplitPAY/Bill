//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
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
    this.state = {display: 'none'}

    this.totalAdder = this.totalAdder.bind(this);
    this.payOptionRender = this.payOptionRender.bind(this)
  }
  static navigationOptions = {
    title: "Your Order"
  }

totalAdder(acc, itemObj){
  return acc + itemObj.price
}

payOptionRender(){
  return (this.state.display === 'none') ? this.setState({display: 'block'}): this.setState({display: 'none'});
}

  render() {
    const { navigate } = this.props.navigation
    const order = this.props.screenProps.order
    const subTotal = order.reduce(this.totalAdder, 0)
    const tax = subTotal * .07
    const total = subTotal + tax

    return (
       <View style={styles.cartPage}>
         <ScrollView>

           <View>
           <Text style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold', letterSpacing: 5, marginTop: 14}}>Your Items</Text>
             {itemListCreator(this.props.screenProps.order)}
             <Breaker value={"Rob's Items"}/>
             {itemListCreator(this.props.screenProps.order)}
             <Text style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold', letterSpacing: 5, marginTop: 14}}>Lee's Items</Text>
             {itemListCreator(this.props.screenProps.order)}
             <Text style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold', letterSpacing: 5, marginTop: 14}}>Luc's Items</Text>
             {itemListCreator(this.props.screenProps.order)}

           </View>
       </ScrollView>

       <PriceBreakdown lineOneText={'Subtotal'} lineOneValue={subTotal} lineTwoText={'Tax'} lineTwoValue={tax.toFixed(2)} />
       <BottomButton buttonText={'Checkout'} doThis={()=> {this.payOptionRender()}} buttonPrice={total.toFixed(2)}/>

       <View style={[styles.hidden, {display: this.state.display, borderRadius: 7.5}]}>
        <View style={styles.payOption}><Text style={{textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}}>Split</Text></View>
        <View style={styles.payOption}><Text style={{textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}}>Your Items Only</Text></View>
        <View style={styles.payOption}><Text style={{textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}}>Custom Selection</Text></View>
        <View style={styles.payOption}><Text style={{textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}}>Roulette</Text></View>
       </View>

     </View>
      );
    }

  }


  const styles = StyleSheet.create({
    hidden:{
      position: 'absolute', height:'auto', borderWidth: .5, borderColor: 'black', width: '95%', zIndex: 2, left: 10, right: 'auto', top: 500, marginBottom: 0, display:'flex', flexDirection: 'row', justifyContent: 'space-between'
    },
    payOption:{
      height: 80,
      width: '25%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRightWidth: .5,
      borderRightColor: 'black',

    },
    cartPage:{
      justifyContent: 'space-between',
      height: '100%',
    },

    descView:{
      height: 'auto',
      //borderBottomColor: 'black',
      //borderBottomWidth: 1,
      backgroundColor:'white',
      justifyContent: 'space-between',
      flexGrow: 1,
      margin: 10,
    },
    priceView:{
      height: 'auto',
      //borderBottomColor: 'black',
      //borderBottomWidth: 1,
      backgroundColor:'white',
      justifyContent: 'space-between',
      flexGrow: 1,
      width: '100%',
      marginBottom: 100,
    },
    inDesc:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      //marginBottom: 20,
    },
    descText:{
      marginLeft: 15,
      //width: 220,
      flexGrow: 2,
      //width: 200,
    },
    descItems:{
      //marginLeft: 15,
      flexShrink: 2,
      //width: 200,
    },
    descPrice:{
      //marginLeft: 50,
    },
    breaker:{
      height: 25,
      backgroundColor: 'rgb(114, 137, 143)',
      justifyContent: 'center',
    },
    breakerText:{
      color: 'rgb(25, 52, 65)',
      marginLeft: 12,
      fontWeight: '600',

    },
    button:{
      flexDirection: 'row',
      backgroundColor: 'black',
      height: 45,
      width: '99%',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 2,
      borderRadius: 5,
    },
     buttonText:{
       color: 'white',
       fontWeight:'bold',
       marginLeft: '37%',
       fontSize: 17,
     },
     price:{
       alignSelf: 'flex-end',
       color: 'white',
       fontWeight:'bold',
     },
     textBox:{
       height: 55,
       width: '90%',
       borderColor: 'grey',
       borderWidth: 1,
       margin: 10,
       color: 'grey',
     },

  })
