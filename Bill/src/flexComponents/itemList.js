import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';

const ItemList = (props) => {
  return (
    <TouchableHighlight style={styles.inDesc}>
    <View style={styles.touch}>
      <Text style={styles.descItems, {fontWeight: 'bold'}}>{props.itemAmount}</Text>
      <Text style={styles.descText, {fontStyle: 'italic'}}>{props.itemName}</Text>
      <Text style={styles.descPrice, {fontWeight: 'bold'}}>${props.itemPrice}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default ItemList;


const styles = StyleSheet.create({



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
    borderBottomWidth: .5,
    borderBottomColor: 'black',

    marginTop: 8,
    width: '95%',
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
  },
  touch:{
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descText:{
    marginLeft: 15,
    fontSize: 17,
    //width: 220,
    flexGrow: 2,
    //width: 200,
  },
  descItems:{
    //marginLeft: 15,
    flexShrink: 2,
    fontSize: 17,
    //width: 200,
  },
  descPrice:{
    //marginLeft: 50,
    fontSize: 17,
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
