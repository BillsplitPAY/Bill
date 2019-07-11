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
import PayOptionsScreen from './payOptions';
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
      button: () => {return <CheckoutButton buttonPrice={this.props.screenProps.o_order.reduce((item)=>{return acc + item.price}, 0)} doThis={()=>{return this.payOptionState()}} /> },
      dropdown: new Animated.Value(0),
      style:{display:'none'},
      counter: 0
    }

    this.totalAdder = this.totalAdder.bind(this);
    // this.payOptionState = this.payOptionState.bind(this);
    // this.splitState = this.splitState.bind(this);
    this.animator = this.animator.bind(this);
    this.getFromFirebase = this.getFromFirebase.bind(this);
    this.payOptionToggle = this.payOptionToggle.bind(this);
    this.clearTable = this.clearTable.bind(this);
    this.orderReader = this.orderReader.bind(this);
    this.tableTotal = this.tableTotal.bind(this);

  }

  payOptionToggle(){
    return (this.state.style.display === 'none') ? this.setState({style:{display:'flex'}}) : this.setState({style:{display:'none'}})
  }

  clearTable(){
    firebase.database().ref(`Restaurant/testTable`).set({})
  }

// Get a database reference to our posts
getFromFirebase(){
  firebase.database().ref('Restaurants/Larrys/Tables/Table1/26/0').on("value", function(snapshot) {

  }, function (errorObject) {

  });
}

  animator(itemCount){
      if (this.state.dropdown._value === 0){
          return Animated.timing(this.state.dropdown, {duration: 300, toValue: (itemCount*50)})
      }
      else{
          return Animated.timing(this.state.dropdown, {duration: 300, toValue: 0})
          //return Animated.timing(this.state.dropdown, {duration: 200, toValue: 0})
      }
  }

totalAdder(acc, itemObj){
  return acc + itemObj.price
}

orderReader(){
  if(this.props.screenProps.o_firebase === null){
    return <View>No orders</View>
  }
  else{
    return(
      Object.keys(this.props.screenProps.o_firebase).map((user)=>{return <OrderDropdown key={user} orders={(this.props.screenProps.o_firebase[user].order) ? this.props.screenProps.o_firebase[user].order : []} screenProps={this.props.screenProps} startVal={0} name={user}/>})
    )
  }
}

tableTotal(){
  return Object.values(this.props.screenProps.o_firebase).map((index)=>{
    return index.order.reduce((acc, orderNumber)=>{
       return orderNumber.price + acc;
    }, 0)
  })
}

  render() {
    const { navigate } = this.props.navigation
    const order = this.props.screenProps.o_order
    const subTotal = order.reduce(this.totalAdder, 0)
    const tax = subTotal * .07
    const total = subTotal + tax
    const orderLength = listItemCreator(this.props.order, OrderListItem).length



    return (
     <View key={this.props.screenProps.o_firebase} style={styles.cartPage} blurRadius={1}>
         <View style={{height:'60%'}}>
           <ScrollView>{this.orderReader()}</ScrollView>
         </View>
         <TouchableOpacity title='Clear' onPress={()=>{this.clearTable()}} style={{position:'relative', borderColor: 'black', borderWidth:1, borderRadius: 5, alignItems: 'center', paddingVertical:10, paddingHorizontal:20, alignSelf:'center', justifyContent: 'center'}}><Text style={{fontSize: 30, fontFamily: gStyle.appFont}}>Clear</Text></TouchableOpacity>
         <CheckoutButton buttonPrice={`$${this.props.screenProps.o_order.reduce((acc, item)=>{return acc + item.price}, 0)}`} payOptionToggle={()=>{this.payOptionToggle()}}/>
         <PayOptionsScreen payOptionToggle={this.payOptionToggle} navigate={this.props.navigation.navigate} style={this.state.style}/>
     </View>
      );
    }
    componentDidMount(){
      firebase.database().ref('Restaurant/testTable').on('value', ()=>{this.setState({counter: this.state.counter +1})})
      // console.log(firebase.database().ref(`Restaurant/testTable/${this.props.screenProps.o_user}`).snapshot)

    }
  }

  // <OrderDropdown key={this.props.order} orders={this.props.order} screenProps={this.props.screenProps} startVal={(isNaN(orderLength)) ? 0 : orderLength*50} name={'You'}/>
  // <OrderDropdown orders={this.props.order} screenProps={this.props.screenProps} startVal={0} name={'Lyn'}/>
  // <OrderDropdown orders={this.props.order} screenProps={this.props.screenProps} startVal={0} name={'Scoe'}/>
  // <OrderDropdown orders={this.props.order} screenProps={this.props.screenProps} startVal={0} name={'Lee'}/>
  // <OrderDropdown orders={this.props.order} screenProps={this.props.screenProps} startVal={0} name={'Luc'}/>

  function mapStateToProps(state){
    return {
      order: state.order
    }
  }

  export default connect(mapStateToProps)(Order)

  const styles = StyleSheet.create({
    hidden:{position: 'absolute', height:'auto', borderColor: 'black', width: '95%',  left: 10, right: 'auto', top: 500, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between', },

    payOption:{height: 80, width: '25%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRightWidth: .5, borderRightColor: 'black',},

    cartPage:{justifyContent: 'space-between', height: '100%', opacity: 1},

    itemHeader:{fontSize: 20, fontWeight: 'bold', color: 'white'},

    payText: {textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}

  })
