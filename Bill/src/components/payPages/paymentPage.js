import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TouchableWithoutFeedback, TextInput} from 'react-native';
import Breaker from '../../flexComponents/breaker';
import {PriceBreakdown, SplitBreakdown, YourBreakdown, RouletteBreakdown, PickBreakdown} from '../../flexComponents/priceBreakdown';
import { addUp, listItemCreator } from '../../helperFunctions/pureFunctions';
import {Tipper} from '../tipper';
import BottomButton, {PayButton, CheckoutButton} from '../../flexComponents/bottomButton'
import {gStyle} from '../../containers/styles';
import {OrderListItem} from '../../flexComponents/listItem'
import OrderDropdown from '../../flexComponents/orderDropdown'
import PayOptions from '../payOptions'
import { Ionicons } from '@expo/vector-icons';


export default class PaymentPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      payOptions: {opacity: 0, zIndex: -1},
      payOps: ()=>{return null}
    }
    this.orderState=this.orderState.bind(this)
  }

  orderState(){
    this.setState({payOps: ()=> null})
  }

  render(){
    const order = this.props.screenProps.order
    const total = addUp(order).toFixed(2)
    const tax = (addUp(order) * .07).toFixed(2);
    const subtotal = ((addUp(order) * .07) + (addUp(order))).toFixed(2);
    const splitTotal = subtotal / 4;
    const tip = ((this.props.screenProps.tip / 100) * (total / 4)).toFixed(2);

    return(
      <View style={{justifyContent: 'space-between', height: '100%', opacity: 1}} blurRadius={1}>
      {this.state.payOps()}

        <View style={{borderBottomColor: '#212121', borderBottomWidth: .5, height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10}}>
          <TouchableWithoutFeedback onPress={()=>{this.props.navigation.goBack()}}><View style={{flexDirection: 'row', alignItems: 'center'}}><Ionicons name="ios-arrow-back" size={40} style={{color:'black'}}/></View></TouchableWithoutFeedback>
          <Text style={{fontFamily: 'Futura', fontSize: 20}}>{this.props.type}</Text>
        </View>
        <ScrollView>
          <View>
            <OrderDropdown screenProps={this.props.screenProps} key={order} startVal={order.length*50} name={'You'}/>
            <OrderDropdown screenProps={this.props.screenProps} orders={order} startVal={0} name={'Lyn'}/>
            <OrderDropdown screenProps={this.props.screenProps} orders={order} startVal={0} name={'Scoe'}/>
            <OrderDropdown screenProps={this.props.screenProps} orders={order} startVal={0} name={'Lee'}/>
            <OrderDropdown screenProps={this.props.screenProps} orders={order} startVal={0} name={'Luc'}/>
          </View>
      </ScrollView>

        {this.props.children}

        <PayButton buttonPrice={'$0.00'} navigate={()=>this.props.navigation.navigate('Confirmation')}/>


    </View>
  )
  }

}

// <TouchableHighlight onPress={()=>{return this.setState({payOps: ()=>{return <PayOptions orderState={this.orderState} navigate={this.props.navigation.navigate}/>}})}} style={{borderColor: '#212121', borderWidth: 3, height: 'auto', width: 'auto', padding:2, borderRadius: '5%', }}><Text>Payment{"\n"}Methods</Text></TouchableHighlight>

export const YourStuffPay = (props) =>{
  return (
    <PaymentPage key={props.screenProps} screenProps={props.screenProps} navigation={props.navigation} type={'Your Items'}><YourBreakdown screenProps={props.screenProps}/><Tipper screenProps={props.screenProps}/></PaymentPage>
  )
}

export const SplitPay = (props) =>{
  return (
    <PaymentPage screenProps={props.screenProps} navigation={props.navigation} type={'Even Split'}>
      <SplitBreakdown screenProps={props.screenProps}/><Tipper screenProps={props.screenProps}/>
    </PaymentPage>
  )
}

export const PickPay = (props) =>{
  return (
    <PaymentPage screenProps={props.screenProps} navigation={props.navigation} type={'Custom Selection'}><PickBreakdown/><Tipper screenProps={props.screenProps}/></PaymentPage>
  )
}

export const RoulettePay = (props) =>{
  return (
    <PaymentPage screenProps={props.screenProps} navigation={props.navigation} type={'Roulette'}><RouletteBreakdown/><Tipper screenProps={props.screenProps}/></PaymentPage>
  )
}
