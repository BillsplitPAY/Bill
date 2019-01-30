import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import Breaker from './breaker';
import PriceBreakdown from '../flexComponents/priceBreakdown';
import { addUp, itemListCreator } from '../helperFunctions/pureFunctions';
import Tipper from './tipper';
import BottomButton, {PayButton, CheckoutButton} from '../flexComponents/bottomButton'
import {gStyle} from '../styles/styles';
import {OrderItemList} from '../flexComponents/itemList'

export default class EvenSplit extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const order = this.props.screenProps.order
    const total = addUp(order).toFixed(2)
    const tax = (addUp(order) * .07).toFixed(2);
    const subtotal = ((addUp(order) * .07) + (addUp(order))).toFixed(2);
    const splitTotal = subtotal / 4;
    const tip = ((this.props.screenProps.tip / 100) * (total / 4)).toFixed(2);

    return(
      <View style={styles.cartPage} blurRadius={1}>
      <TouchableOpacity style={{position: 'absolute', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'red', borderRadius: 5, left: 5, top: 5, height: 'auto', width: 'auto', padding: 10}}><Text style={{textAlign: 'center'}}>Cancel Payment{'\n'}Option</Text></TouchableOpacity>
        <ScrollView>
          <View>
           <Text style={styles.itemHeader}>Your Items</Text>
           {itemListCreator(this.props.screenProps.order, OrderItemList)}
           <Text style={styles.itemHeader}>Rob's Items</Text>
           {itemListCreator(this.props.screenProps.order, OrderItemList)}
           <Text style={styles.itemHeader}>Lee's Items</Text>
           {itemListCreator(this.props.screenProps.order, OrderItemList)}
           <Text style={styles.itemHeader}>Luc's Items</Text>
           {itemListCreator(this.props.screenProps.order, OrderItemList)}
          </View>
      </ScrollView>

      <PriceBreakdown lineOneValue={subtotal}lineTwoValue={tax}/>

      <Tipper />

      <PayButton buttonPrice={'$0.00'}/>

    </View>
  )
  }

}

const styles = StyleSheet.create({
  hidden:{position: 'absolute', height:'auto', borderColor: 'black', width: '95%',  left: 10, right: 'auto', top: 500, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between'},

  payOption:{height: 80, width: '25%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRightWidth: .5, borderRightColor: 'black',},

  cartPage:{justifyContent: 'flex-start', height: 830, opacity: 1},

  itemHeader:{textAlign: 'center', fontSize: 14, fontWeight: 'bold', letterSpacing: 5, marginTop: 14},

  payText: {textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}


})
