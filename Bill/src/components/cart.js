//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import Breaker from './breaker';
import {ItemList, CartItemList} from '../flexComponents/itemList';
import { itemListCreator, addUp } from '../helperFunctions/pureFunctions';
import {PriceBreakdown} from '../flexComponents/priceBreakdown';
import NoteBox from '../flexComponents/noteBox';
import firebase from 'firebase';
//import DrawerNav from './drawerNav.js';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import BottomButton from '../flexComponents/bottomButton'


class Cart extends Component {
  constructor(props){
    super(props);
    this.totalAdder=this.totalAdder.bind(this)
    this.sendToFirebase=this.sendToFirebase.bind(this)
  }
  static navigationOptions: {
   title: 'Cart',
   headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
   headerTintColor: 'white'
};
  sendToFirebase(cartInfo, subtotal) {

    this.props.screenProps.submitOrder(cartInfo);
    this.props.screenProps.emptyCart();
    this.props.navigation.navigate('Order')

    console.log('TRYINGNN TO SEND THE DATAAAAA!!!')
      //console.log(cartInfo)

      //add the cart to user1

      //cartInfo.subtotal = subtotal

      //async issue below to be resolved

    firebase.database().ref('Restaurants/Larrys/Tables/Table1')
    // .child('8888').setValue(cartInfo)
    .push()
    .set(cartInfo)
    .then((data)=>{
        //success callback
        console.log('data ', cartInfo)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })

  }

  totalAdder(acc, itemObj){
    return acc + itemObj.price
  }

  render() {
    console.log('cart info', this.props.user)
    const { navigate } = this.props.navigation
    const cart = this.props.screenProps.cart
    const subtotal = cart.reduce(this.totalAdder, 0)
    const tax = subtotal * .07
    const total = subtotal + tax

    console.log(this.props)
    return (
      <View style={{height: '100%'}}>

        <View style={{height: '55%'}}>
          <View style={{borderBottomWidth: .5, borderBottomColor: 'black'}}>
            <Text style={{fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>Your Cart</Text>
          </View>
          <ScrollView>
          {itemListCreator(cart, CartItemList)}
          </ScrollView>
        </View>


        <View style={{justifyContent: 'flex-end', height: '45%'}}>
        <Text style={{fontWeight: 'bold', marginBottom: 10, marginLeft: 10}}>Order Notes</Text>
        <NoteBox defaultValue={'e.g. Bring everything out together!'}/>

          <PriceBreakdown lineOneValue={subtotal} lineTwoValue={tax.toFixed(2)} />

          <BottomButton buttonText={'Submit Order'} doThis={()=>{this.sendToFirebase(cart, subtotal);}} buttonPrice={total.toFixed(2)}/>



        </View>

      </View>








     //   <View style={styles.cartPage}>
     //     <View style={{width: '100%', height: 'auto'}}>
     //     <Text style={{textAlign: 'left', marginTop: 8, fontWeight: 'bold', fontSize: 14, marginLeft: 5}}>Your Cart</Text>
     //       <ScrollView style={{height: 'auto'}}>
     //         {itemListCreator(cart)}
     //      </ScrollView>
     //    </View>
     //
     //    <View style={{height: '30%'}}>
     //      <Breaker value='Add a Note' />
     //       <View style={{marginTop: 15}}>
     //        <NoteBox />
     //       </View>
     //      </View>
     //
     //      <View style={{height: '30%'}}>
     //        <PriceBreakdown lineTwoText={'Item Total'} lineThreeText={'Item Tax'} lineFourText={'Item Subtotal'} lineTwo={total} lineThree={tax} lineFour={subtotal}/>
     //        <TouchableOpacity style={styles.button} onPress={()=>{this.props.screenProps.submitOrder(cart); this.props.screenProps.emptyCart(); this.props.navigation.navigate('Order') }}>
     //            <Text style={styles.buttonText}>Submit Order</Text>
     //         </TouchableOpacity>
     //       </View>
     //
     // </View>
      );
    }
  }



function mapStateToProps(state){
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(Cart)


  const styles = StyleSheet.create({
    cartPage:{
      justifyContent: 'space-between',
      height: '100%',
    },

    descView:{
      height: 'auto',
      //borderBottomColor: 'black',
      //borderBottomWidth: 1,
      justifyContent: 'space-between',
      flexGrow: 1,
      //margin: 10,
      marginTop:5,
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
