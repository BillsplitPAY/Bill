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




const testy = (arr) => {
  return arr.map(function(index){
    return {name: index.name, desc: index.description}
  })
}

 export const tester = (array) => {
   let newMenu = {};
  array.forEach(function(catObject){
    let key = catObject.name
    newMenu[key] = catObject.entries.items.map(function(index){
      return {name: index.name, desc: index.description, category: catObject.name, price: index.price}
    });
    })
    return newMenu
}



//set the food state property to the object version of the menu



export const menuSetter = (array) => {
  let newMenu = {};
 array.forEach(function(catObject){
   let key = catObject.name
   newMenu[key] = catObject.entries.items.map(function(index){
     return {name: index.name, desc: index.description, category: catObject.name, price: index.price}
   });
   })
   this.props.setMenu(newMenu)

}
