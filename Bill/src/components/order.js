//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView,
  TouchableHighlight, Image, TouchableOpacity, TextInput, Animated} from 'react-native';
import Breaker from '../flexComponents/breaker';
import {listItemCreator} from '../helperFunctions/pureFunctions';
import BottomButton, {PayButton, CheckoutButton} from '../flexComponents/bottomButton'
import { StackNavigator } from 'react-navigation';
import {gStyle} from '../containers/styles';
import {Tipper} from './tipper';
import PayOptions from './payOptions';
import {SplitBreakdown, PriceBreakdown} from '../flexComponents/priceBreakdown';
import {OrderListItem} from '../flexComponents/listItem';
import OrderDropdown from '../flexComponents/orderDropdown'
import firebase from 'firebase';
import { connect } from 'react-redux'

class Order extends Component {
  constructor(props){
    super(props);
    this.state ={
      tip: ()=>{return null},
      payUp: ()=>{return null},
      breakdown: (subTotal, tax)=>{return <PriceBreakdown lineOneValue={subTotal}lineTwoValue={tax.toFixed(2)} subtotal={tax.toFixed(2)}/>},
      button: () => {return <CheckoutButton buttonPrice={this.props.screenProps.order.reduce((item)=>{return acc + item.price}, 0)} doThis={()=>{return this.payOptionState()}} /> },
      dropdown: new Animated.Value(0),

    }
    this.totalAdder = this.totalAdder.bind(this);
    this.orderState = this.orderState.bind(this);
    // this.payOptionState = this.payOptionState.bind(this);
    // this.splitState = this.splitState.bind(this);
    this.animator = this.animator.bind(this);
    this.getFromFirebase = this.getFromFirebase.bind(this);
  }


// Get a database reference to our posts
getFromFirebase(){
  firebase.database().ref('Restaurants/Larrys/Tables/Table1/26/0').on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}
// var ref = db.ref("server/saving-data/fireblog/posts");
// firebase.database().ref('Restaurants/Larrys/Tables/Table1')
//
// // Attach an asynchronous callback to read the data at our posts reference
// ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

  animator(itemCount){
      if (this.state.dropdown._value === 0){
          return Animated.timing(this.state.dropdown, {duration: 300, toValue: (itemCount*50)})
      }
      else{
          return Animated.timing(this.state.dropdown, {duration: 300, toValue: 0})
          //return Animated.timing(this.state.dropdown, {duration: 200, toValue: 0})
      }
  }

payOptionState(){
  this.setState({
    payUp: ()=>{return <PayOptions payState={()=>{return this.splitState()}} orderState={this.orderState} navigate={this.props.navigation.navigate}/>}
  })
  console.log(this.state)
}

orderState(){
  this.setState({
    tip: ()=>{return null},
    payUp: ()=>{return null},
    breakdown: (subTotal, tax)=>{return <PriceBreakdown lineOneValue={subTotal}lineTwoValue={tax.toFixed(2)}/>},
    button: () => {return <CheckoutButton buttonPrice={'$0.00'} doThis={()=>{return this.payState()}}/> }
  })
  console.log(this.state)
}

totalAdder(acc, itemObj){
  return acc + itemObj.price
}

  render() {
    const { navigate } = this.props.navigation
    const order = this.props.screenProps.order
    const subTotal = order.reduce(this.totalAdder, 0)
    const tax = subTotal * .07
    const total = subTotal + tax
    this.getFromFirebase();
    return (
       <View style={styles.cartPage} blurRadius={1}>

       <TouchableOpacity onPress={()=>{this.orderState()}} style={[this.state.screenBlurrer, {width: '100%', height: '100%', position: 'absolute',}]} >
         <Image source={{uri: 'https://dummyimage.com/300x600/e7e8eb/e7e8eb.jpg'}} style={{height: '100%', width: '100%'}}/>
       </TouchableOpacity>
       <ScrollView>
         <View>
           <OrderDropdown key={this.props.order} orders={this.props.order} screenProps={this.props.screenProps} startVal={this.props.order.length*50} name={'You'}/>
           <OrderDropdown orders={this.props.order} screenProps={this.props.screenProps} startVal={0} name={'Lyn'}/>
           <OrderDropdown orders={this.props.order} screenProps={this.props.screenProps} startVal={0} name={'Scoe'}/>
           <OrderDropdown orders={this.props.order} screenProps={this.props.screenProps} startVal={0} name={'Lee'}/>
           <OrderDropdown orders={this.props.order} screenProps={this.props.screenProps} startVal={0} name={'Luc'}/>

         </View>
       </ScrollView>


       <CheckoutButton buttonPrice={`$${this.props.screenProps.order.reduce((acc, item)=>{return acc + item.price}, 0)}`} doThis={()=>{return this.payOptionState()}}/>
       {this.state.payUp()}

     </View>
      );
    }
  }

  function mapStateToProps(state){
    return {
      order: state.order
    }
  }


  export default connect(mapStateToProps)(Order)



  // <TouchableOpacity onPress={()=>{console.log(this.state); this.setState({screenBlurrer:{opacity: .5, zIndex: 0, borderColor: 'blue', borderWidth: 2}})}} style={[this.state.screenBlurrer, {width: '100%', height: '100%', position: 'absolute',}]} >

// <BottomButton buttonText={'Checkout'} doThis={() => {this.animator().start(); console.log(this.state)}} buttonPrice={total.toFixed(2)}/>

  const styles = StyleSheet.create({
    hidden:{position: 'absolute', height:'auto', borderColor: 'black', width: '95%',  left: 10, right: 'auto', top: 500, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between', },

    payOption:{height: 80, width: '25%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRightWidth: .5, borderRightColor: 'black',},

    cartPage:{justifyContent: 'space-between', height: '100%', opacity: 1},

    itemHeader:{fontSize: 20, fontWeight: 'bold', color: 'white'},

    payText: {textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}


  })
