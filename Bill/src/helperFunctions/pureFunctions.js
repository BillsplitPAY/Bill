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
//create new array that will hold objects that get rendered
  let newArray = []
//if there's nothing in cart, render a message saying so.
  if (itemArray.length === 0){
    return <Text style={{textAlign: 'center', marginTop: 40}}>You dont have anything in your cart yet!</Text>
  }
//if there are objects in cart array, iterate over objects
  itemArray.map(function(item){
    //add the first object in cart to newArray
    if (newArray.length === 0){
      newArray.push({...item, quantity: 1})
      return
    }
    //Beginning w/ the second item, iterate over objects in newArray, and compare their name properties to item's name property
    for (let i = 0; i < newArray.length; i++){
      //if item has the same name as the newArray object it's being compared to...
      if (item.name === newArray[i].name){
        //add 1 to the quantity property on that newArray object, and move to the next item.
          newArray[i].quantity += 1
          newArray[i].price += item.price
          return;
        }
      //if not, compare item to the next object in newArray. But if at the end of newArray, add item to newArray
      else{
        if (i === newArray.length - 1){
          newArray.push({...item, quantity: 1})
          return;
        }
        else{
          continue;
        }
      }
    }
  })
    console.log(newArray)
    return newArray.map((newItem) => {
        return <ItemList itemAmount = {newItem.quantity} itemName = {newItem.name} itemPrice={newItem.price} />
    })
  }


//need the following styles: styles.foodName, styles.foodPrice. styles.innerTouch.
//Really, you should build these into this, or an independent module
const itemizer = (itemArray, navi) => {
  return itemArray.map(function(index){
    return(
      <TouchableHighlight onPress={() => {navi('ItemPage', { screen: props.foodItem, other: props.category})}} style={styles.innerTouch, {width: '100%', flexDirection: 'row',  justifyContent: 'space-between', alignSelf: 'center', borderColor: '#dad9e2', borderWidth: .5, marginBottom: 2}}>
      <View style={{height: '100%', width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 2, backgroundColor: 'white', shadowOffset:{  width: 4,  height: 8,  }, shadowColor: 'grey', shadowOpacity: .75, borderRadius: 3.5, padding: 5}}>
            <Text style={[styles.foodName, {width: '83%', fontFamily: 'Futura',}]}>{index.name}</Text>
            <Text style={[styles.foodPrice, {width: '17%', alignSelf: 'flex-end'}]}>${Number(index.price).toFixed(0)}</Text>
          </View>
          </TouchableHighlight>
    )
  });
}

 export const menuSetter = (array) => {
   let newMenu = {};
  array.forEach(function(catObject){
    let key = catObject.name
    newMenu[key] = catObject.entries.items.map(function(index){
      return {name: index.name, desc: index.description, category: catObject.name, price: Number(index.price)}
    });
    })
    return newMenu
}
