import React from 'react';
import ItemList from '../flexComponents/itemList';

//takes an array containing objects and adds up the price properties of each object
export const addUp = function(array){
  return array.reduce(function(acc, indexType){
    return (acc + indexType.price)
  }, 0)

};

export const itemListCreator = function(itemArray){
  return itemArray.map(function(item){
    return <ItemList itemAmount = {item.quantity} itemName = {item.name} itemPrice={item.price <= 10 ? item.price.toPrecision(3) : item.price.toPrecision(4)} />
  }
  )
}
