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
  const splitTotal = total / Object.keys(props.screenProps.firebase).length;
  const tip = props.screenProps.tip;
  const finalTotal = splitTotal + tip
  console.log(Object.keys(props.screenProps.firebase).length)
  return (
    <PaymentPage screenProps={props.screenProps} navigation={props.navigation} type={'Even Split'}>
      <SplitBreakdown screenProps={props.screenProps} diners={Object.keys(props.screenProps.firebase).length}/>
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

export class RoulettePay extends React.Component{
constructor(props){
  super(props);
  this.state={
    total: 0,
    payer: null,
    display: 'none',
    spinButton: 'flex',
    spinOrPay: ()=>{return <TouchableOpacity title='Spin' style={{height: 50, display: this.state.spinButton, alignItems:'center', justifyContent: 'center', width:'15%', alignSelf:'center', borderWidth: 1, borderColor: 'black', borderRadius:5, backgroundColor:'black'}} onPress={()=>{setTimeout(()=>{this.roulette()}, 2000)}}><Text style={{color: 'white', fontSize:40}}>Spin</Text></TouchableOpacity>}

  }
  this.roulette = this.roulette.bind(this)
  this.tableTotal = this.tableTotal.bind(this)

}

tableTotal(){
  return Object.values(this.props.screenProps.firebase).map((index)=>{
    return index.order.reduce((acc, orderNumber)=>{
       return orderNumber.price + acc;
    }, 0)
  })
}

 roulette(){
  const objLength = Object.keys(this.props.screenProps.firebase).length
  const index = Math.floor(Math.random() * (objLength - 0)+0)
  const rando = Object.keys(this.props.screenProps.firebase)[index];
  console.log(rando)
  const subtotal = this.tableTotal().reduce((acc, price)=>{return acc + price}, 0)

  return (rando !== this.props.screenProps.user)?this.setState({total:0, payer: rando, display: 'flex', spinButton:'none', spinOrPay:()=>{return <PickBreakdown subtotal={this.state.total} tax={this.state.total * .07}/>}}):this.setState({total: subtotal, payer: 'You', display: 'flex', spinButton:'none', spinOrPay:()=>{return <PickBreakdown subtotal={this.state.total} tax={this.state.total * .07}/>}})
  // this.setState({payer: Object.keys(this.props.screenProps.firebase)[index]})
}



  render(){

    const order = this.props.screenProps.order
    const tax = (addUp(order) * .07);
    const total = ((addUp(order) * .07) + (addUp(order)));
    const tip = this.props.screenProps.tip / 4;
    const finalTotal = total + tip

  return (
    <PaymentPage screenProps={this.props.screenProps} navigation={this.props.navigation} type={'Roulette'}>
    <View><Text>{this.state.total}</Text></View>
    <View style={{display: this.state.display, backgroundColor:'white', position: 'absolute', height: '20%', width: '50%', zIndex:5, borderWidth:5, borderColor:'black', alignItems:'center', justifyContent:'center', fontSize:'2em', alignSelf:'center', top:'35%'}}>
      <Text style={{fontSize:20}}>And the lucky winner is...</Text>
      <Text style={{fontSize:100}}>{this.state.payer}!!!!</Text>
    </View>
    {this.state.spinOrPay()}
    <Tipper screenProps={this.props.screenProps} payTotal={total}/>
    <PayButton buttonPrice={`$${finalTotal.toFixed(2)}`} navigate={()=>this.props.navigation.navigate('Confirmation')}/>
    </PaymentPage>
  )
}
}
// <TouchableOpacity title='Spin' style={{height: 50, display: this.state.spinButton, alignItems:'center', justifyContent: 'center', width:'15%', alignSelf:'center', borderWidth: 1, borderColor: 'black', borderRadius:5, backgroundColor:'black'}} onPress={()=>{setTimeout(()=>{this.roulette()}, 2000)}}><Text style={{color: 'white', fontSize:40}}>Spin</Text></TouchableOpacity>
// <PickBreakdown subtotal ={this.state.total} tax={this.state.total * .07}/>

// <PaymentPage screenProps={this.props.screenProps} navigation={this.props.navigation} type={'Roulette'}>
// <Button title='Spin' onPress={()=>{this.roulette()}}>Spin</Button>
// <View>{this.state.total}</View>
// <PickBreakdown subtotal ={this.state.total} tax={tax}/>
// <Tipper screenProps={this.props.screenProps} payTotal={total}/>
// <PayButton buttonPrice={`$${finalTotal.toFixed(2)}`} navigate={()=>this.props.navigation.navigate('Confirmation')}/>
// </PaymentPage>
