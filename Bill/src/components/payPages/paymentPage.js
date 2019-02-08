import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import Breaker from '../../flexComponents/breaker';
import {PriceBreakdown, SplitBreakdown, YourBreakdown, RouletteBreakdown, PickBreakdown} from '../../flexComponents/priceBreakdown';
import { addUp, listItemCreator } from '../../helperFunctions/pureFunctions';
import Tipper from '../tipper';
import BottomButton, {PayButton, CheckoutButton} from '../../flexComponents/bottomButton'
import {gStyle} from '../../containers/styles';
import {OrderListItem} from '../../flexComponents/listItem'
import OrderDropdown from '../../flexComponents/orderDropdown'


export default class PaymentPage extends Component{
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
      <View style={{justifyContent: 'space-between', height: 870, opacity: 1}} blurRadius={1}>
        <ScrollView>
          <View>
          <OrderDropdown order={this.props.screenProps.order} name={'You'}/>
          <OrderDropdown order={this.props.screenProps.order} name={'Lee'}/>
          <OrderDropdown order={this.props.screenProps.order} name={'Scoe'}/>
          <OrderDropdown order={this.props.screenProps.order} name={'Luc'}/>
          <OrderDropdown order={this.props.screenProps.order} name={'Lyn'}/>


          </View>
      </ScrollView>



        {this.props.children}

        <PayButton buttonPrice={'$0.00'}/>
        <View style={{height: 80, width: '100%', backgroundColor: '#212121'}}></View>

    </View>
  )
  }

}

export const YourStuffPay = (props) =>{
  return (
    <PaymentPage screenProps={props.screenProps}><YourBreakdown/><Tipper/></PaymentPage>
  )
}

export const SplitPay = (props) =>{
  return (
    <PaymentPage screenProps={props.screenProps}><SplitBreakdown/><Tipper/></PaymentPage>
  )
}

export const PickPay = (props) =>{
  return (
    <PaymentPage screenProps={props.screenProps}><PickBreakdown/><Tipper/></PaymentPage>
  )
}

export const RoulettePay = (props) =>{
  return (
    <PaymentPage screenProps={props.screenProps}><RouletteBreakdown/><Tipper/></PaymentPage>
  )
}
