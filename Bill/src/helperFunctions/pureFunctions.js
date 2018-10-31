import React from 'react';
import ItemList from '../flexComponents/itemList';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';

//takes an array containing objects and adds up the price properties of each object
export const addUp = function(array){
  return array.reduce(function(acc, indexType){
    return (acc + indexType.price)
  }, 0)

};

export const itemListCreator = function(itemArray){
  if (itemArray.length === 0){
    return <Text style={{textAlign: 'center', marginTop: 40}}>You dont have anything in your cart yet!</Text>
  }
  return itemArray.map(function(item){

    return <ItemList  itemAmount = {item.quantity} itemName = {item.name} itemPrice={item.price <= 10 ? item.price.toFixed(2) : item.price.toFixed(2)} />
  }
  )
}
