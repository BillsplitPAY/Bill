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
import PayOptionsScreen from '../payOptions'
import { Ionicons } from '@expo/vector-icons';


export default class PaymentPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      customTip: {opacity: 0, zIndex: -1},
      payOps: ()=>{return null}
    }
    this.orderState=this.orderState.bind(this)
    this.customTipper=this.customTipper.bind(this)
  }

  orderState(){
    this.setState({payOps: ()=> null})
  }

  customTipper(){
    this.setState({customTip:{opacity: 1, zIndex: 2}})
  }

  render(){
    const order = this.props.screenProps.order
    const subtotal = addUp(order)
    const tax = (addUp(order) * .07);
    const total = ((addUp(order) * .07) + (addUp(order)));
    const splitTotal = total / 4;
    const tip = this.props.screenProps.tip;
    const finalTotal = total + tip
    const orderLength = listItemCreator(order, OrderListItem).length*50

    // console.log(listItemCreator(order, OrderListItem))
    return(
      <View style={{justifyContent: 'space-between', height: '100%', opacity: 1}} blurRadius={1}>
      {this.state.payOps()}

        <View style={{borderBottomColor: '#212121', borderBottomWidth: .5, height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10}}>
          <TouchableWithoutFeedback onPress={()=>{this.props.navigation.goBack()}}><View style={{flexDirection: 'row', alignItems: 'center'}}><Ionicons name="ios-arrow-back" size={40} style={{color:'black'}}/></View></TouchableWithoutFeedback>
          <Text style={{fontFamily: 'Futura', fontSize: 20}}>{this.props.type}</Text>
        </View>
        <ScrollView>
          <View>
            {Object.keys(this.props.screenProps.firebase).map((user)=>{return <OrderDropdown orders={(this.props.screenProps.firebase[user].order) ? this.props.screenProps.firebase[user].order : []} screenProps={this.props.screenProps} startVal={0} name={user}/>})}
          </View>
      </ScrollView>

        {this.props.children}
        <View style={[{height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,.5)', position:'absolute', justifyContent:'center'}, this.state.customTip]}>
          <View style={{backgroundColor: 'white', height: '25%', width: '60%', alignSelf: 'center', alignItems: 'center', justifyContent:'space-around'}}>
            <Text>Enter Your Tip Amount:</Text>
            <TextInput  value={'$'} style={{width: '60%', height: '30%', fontSize:20, borderColor: 'black', borderWidth: 1, paddingLeft:5, paddingRight:5, }}></TextInput>
            <TouchableHighlight><Text>Ok!</Text></TouchableHighlight>
          </View>
        </View>

    </View>
  )
  }

}

// <TouchableHighlight onPress={()=>{return this.setState({payOps: ()=>{return <PayOptionsScreen orderState={this.orderState} navigate={this.props.navigation.navigate}/>}})}} style={{borderColor: '#212121', borderWidth: 3, height: 'auto', width: 'auto', padding:2, borderRadius: '5%', }}><Text>Payment{"\n"}Methods</Text></TouchableHighlight>

export const SplitPay = (props) =>{
  const order = props.screenProps.order
  const subtotal = addUp(order)
  const tax = (addUp(order) * .07);
  const total = ((addUp(order) * .07) + (addUp(order)));
  const splitTotal = total / 4;
  const tip = props.screenProps.tip;
  const finalTotal = splitTotal + tip
  console.log(props.screenProps)
  return (
    <PaymentPage screenProps={props.screenProps} navigation={props.navigation} type={'Even Split'}>
      <SplitBreakdown screenProps={props.screenProps}/>
      <Tipper screenProps={props.screenProps} payTotal={splitTotal} />
      <PayButton buttonPrice={`$${finalTotal.toFixed(2)}`} navigate={()=>props.navigation.navigate('Confirmation')}/>
    </PaymentPage>
  )
}

export const YourStuffPay = (props) =>{
  const order = props.screenProps.order
  const subtotal = addUp(order)
  const tax = (addUp(order) * .07);
  const total = ((addUp(order) * .07) + (addUp(order)));
  const tip = props.screenProps.tip / 4;
  const finalTotal = total + tip
  return (
    <PaymentPage key={props.screenProps} screenProps={props.screenProps} navigation={props.navigation} type={'Your Items'}>
    <YourBreakdown screenProps={props.screenProps}/>
    <Tipper screenProps={props.screenProps} payTotal={total}/>
    <PayButton buttonPrice={`$${finalTotal.toFixed(2)}`} navigate={()=>props.navigation.navigate('Confirmation')}/>
    </PaymentPage>
  )
}

export const PickPay = (props) =>{
  const order = props.screenProps.order
  const subtotal = addUp(order)
  const tax = (addUp(order) * .07);
  const total = ((addUp(order) * .07) + (addUp(order)));
  const tip = props.screenProps.tip / 4;
  const finalTotal = total + tip
  return (
    <PaymentPage screenProps={props.screenProps} navigation={props.navigation} type={'Custom Selection'}>
    <PickBreakdown subtotal ={subtotal} tax={tax}/>
    <Tipper screenProps={props.screenProps} payTotal={total}/>
    <PayButton buttonPrice={`$${finalTotal.toFixed(2)}`} navigate={()=>props.navigation.navigate('Confirmation')}/>
    </PaymentPage>
  )
}

export const RoulettePay = (props) =>{
  const order = props.screenProps.order
  const subtotal = addUp(order)
  const tax = (addUp(order) * .07);
  const total = ((addUp(order) * .07) + (addUp(order)));
  const tip = props.screenProps.tip / 4;
  const finalTotal = total + tip
  return (
    <PaymentPage screenProps={props.screenProps} navigation={props.navigation} type={'Roulette'}>
    <PickBreakdown subtotal ={subtotal} tax={tax}/>
    <Tipper screenProps={props.screenProps} payTotal={total}/>
    <PayButton buttonPrice={`$${finalTotal.toFixed(2)}`} navigate={()=>props.navigation.navigate('Confirmation')}/>
    </PaymentPage>
  )
}
