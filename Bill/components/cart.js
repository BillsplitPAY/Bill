//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import Breaker from './breaker';
import ItemList from '../src/flexComponents/itemList';
import { itemListCreator, addUp } from '../src/helperFunctions/pureFunctions';
import PriceBreakdown from '../src/flexComponents/priceBreakdown';

//import DrawerNav from './drawerNav.js';
import { StackNavigator } from 'react-navigation';

export default class Cart extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions: {
   title: 'Cart',
   headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
   headerTintColor: 'white'
};

  render() {
    const { navigate } = this.props.navigation
    const cart = this.props.screenProps.cart
    const total = addUp(cart).toFixed(2)
    const tax = (addUp(cart) * .07).toFixed(2);
    const subtotal = ((addUp(cart) * .07) + (addUp(cart))).toFixed(2);

    return (
       <View style={styles.cartPage}>
         <ScrollView>
           <View style={styles.descView}>
           {itemListCreator(cart)}

           </View>
          <Breaker value='Add a Note' />
           <View style={styles.descView}>
             <TextInput style={styles.textBox} value='Hey Chef...' multiline = {true} numberOfLines = {4}/>
           </View>
       </ScrollView>

       <View>
       <PriceBreakdown lineTwoText={'Item Total'} lineThreeText={'Item Tax'} lineFourText={'Item Subtotal'} lineTwo={total} lineThree={tax} lineFour={subtotal}/>

       </View>

         <TouchableOpacity style={styles.button} onPress={()=>{this.props.screenProps.submitOrder(cart); this.props.screenProps.emptyCart(); }}>
           <Text style={styles.buttonText}>Submit Order</Text>
           </TouchableOpacity>
     </View>
      );
    }
  }

  const styles = StyleSheet.create({
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
      flexDirection: 'column',
      backgroundColor: 'rgb(25, 52, 65)',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
     buttonText:{
       color: 'white',
       fontWeight:'bold',
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
