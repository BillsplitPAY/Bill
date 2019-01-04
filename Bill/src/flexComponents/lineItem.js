import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import Breaker from './breaker';
import ItemList from '../flexComponents/itemList';
import { itemListCreator, addUp } from '../helperFunctions/pureFunctions';
import PriceBreakdown from '../flexComponents/priceBreakdown';
import NoteBox from '../flexComponents/noteBox';



export const LineItem = (props) =>{
  return(
    <><>
  )

}

export const itemListCreator = function(itemArray){
  if (itemArray.length === 0){
    return <Text style={{textAlign: 'center', marginTop: 40}}>You dont have anything in your cart yet!</Text>
  }
  return itemArray.map(function(item){

    return <ItemList  itemAmount = {item.quantity} itemName = {item.name} itemPrice={item.price <= 10 ? item.price.toFixed(2) : item.price.toFixed(2)} />
  }
  )
}
