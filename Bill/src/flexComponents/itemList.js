import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';

const ItemList = (props) => {
  return (
    <View>
    <View style={styles.inDesc}>
      <Text style={styles.descItems}>{props.itemAmount}</Text>
      <Text style={styles.descText}>{props.itemName}</Text>
      <Text style={styles.descPrice}>${props.itemPrice}</Text>
    </View>
    </View>
  )
}

export default ItemList;


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
