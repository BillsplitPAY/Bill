//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import Breaker from './breaker';

//import DrawerNav from './drawerNav.js';
import { StackNavigator } from 'react-navigation';

export default class Cart extends Component {
  constructor(props){
    super(props);
    this.mapster = this.mapster.bind(this);
    this.cartItemCreator = this.cartItemCreator.bind(this);
    this.totalAdder = this.totalAdder.bind(this);

  }
  static navigationOptions: {
   title: 'Cart',
   headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
   headerTintColor: 'white'
};


cartItemCreator(foodItemObject){
  return(
    <View style={styles.inDesc}>
      <Text style={styles.descItems}>'1X'</Text>
      <Text style={styles.descText}>{foodItemObject.name}</Text>
      <Text style={styles.descPrice}>${foodItemObject.price <= 10 ? foodItemObject.price.toPrecision(3) : foodItemObject.price.toPrecision(4)}</Text>
    </View>
  )
}

mapster(cartArray, funky){
  return cartArray.map(funky)
}

totalAdder(){
  let total = 0;
  for (i = 0; i < this.props.screenProps.cart.length; i++){
    total += this.props.screenProps.cart[i].price
  }
  return total
}

  render() {
    const { navigate } = this.props.navigation
    console.log(this.props)
    return (
       <View style={styles.cartPage}>
         <ScrollView>

           <View style={styles.descView}>
             {this.mapster(this.props.screenProps.cart, this.cartItemCreator)}
           </View>

          <Breaker value='Add a Note' />
           <View style={styles.descView}>
             <TextInput style={styles.textBox} value='Hey Chef...' multiline = {true} numberOfLines = {4}/>
           </View>

       </ScrollView>

       <View>
          <View style={styles.priceView}>
            <View style={styles.inDesc}>
              <Text>Subtotal</Text>
              <Text>${this.totalAdder().toFixed(2)}</Text>
            </View>
            <View style={styles.inDesc}>
              <Text>Tax</Text>
              <Text>${(this.totalAdder() * .07).toFixed(2)}</Text>
            </View>
            <View style={styles.inDesc}>
              <Text>Total</Text>
              <Text>${((this.totalAdder() * .07) + (this.totalAdder())).toFixed(2)}</Text>
            </View>
          </View>
       </View>

         <TouchableOpacity style={styles.button} onPress={()=>{this.props.screenProps.submitOrder(this.props.screenProps.cart); this.props.screenProps.emptyCart(); console.log(this.props.screenProps.order)}}>
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
