//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import Breaker from './breaker';

//import DrawerNav from './drawerNav.js';
import { StackNavigator } from 'react-navigation';

export default class Order extends Component {
  constructor(props){
    super(props);
    this.mapster = this.mapster.bind(this);
    this.orderItemCreator = this.orderItemCreator.bind(this);

  }
  static navigationOptions = {
    title: "Group Order"
  }


orderItemCreator(foodItemObject){
  if (this.props.screenProps.order.length === 0){
    return 'getting order'
  }
  return(
    <View style={styles.inDesc}>
      <Text style={styles.descItems}>'1X'</Text>
      <Text style={styles.descText}>{foodItemObject.name}</Text>
      <Text style={styles.descPrice}>{foodItemObject.price}</Text>
    </View>
  )
}

mapster(orderArray, funky){
  return orderArray.map(funky)
}


  render() {
    const { navigate } = this.props.navigation
    console.log(this.props)
    return (
       <View style={styles.cartPage}>
         <ScrollView>

           <Breaker value='What You Gittin' />
           <View style={styles.descView}>
             {this.mapster(this.props.screenProps.order, this.orderItemCreator)}
           </View>

       </ScrollView>

       <View>
          <View style={styles.priceView}>
            <View style={styles.inDesc}>
              <Text>Subtotal</Text>
              <Text>{this.props.screenProps.price}</Text>
            </View>
            <View style={styles.inDesc}>
              <Text>Tax</Text>
              <Text>{this.props.screenProps.price * .07}</Text>
            </View>
            <View style={styles.inDesc}>
              <Text>Total</Text>
              <Text>{this.props.screenProps.price * .07 + this.props.screenProps.price}</Text>
            </View>
          </View>
       </View>

         <TouchableOpacity style={styles.button} onPress={()=>{console.log(this.props.propers)}}>
           <Text style={styles.buttonText}>Checkout</Text>
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
      backgroundColor:'grey',
      justifyContent: 'space-between',
      flexGrow: 1,
      margin: 10,
    },
    priceView:{
      height: 'auto',
      //borderBottomColor: 'black',
      //borderBottomWidth: 1,
      backgroundColor:'grey',
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
      backgroundColor: 'rgb(32, 202, 39)',
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
