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
    return <ItemList itemAmount = {'1x'} itemName = {item.name} itemPrice={item.price <= 10 ? item.price.toPrecision(3) : item.price.toPrecision(4)} />
  }
  )
}

//export const orderAdd = addUp(this.props.screenProps.order);

//   let total = 0;
//   for (i = 0; i < this.props.screenProps.order.length; i++){
//     total += this.props.screenProps.order[i].price
//   }
//   return total
// }
//
// orderItemCreator(foodItemObject){
//   if (this.props.screenProps.order.length === 0){
//     return 'getting order'
//   }
//   return(
//     <View style={styles.inDesc}>
//       <Text style={styles.descItems}>'1X'</Text>
//       <Text style={styles.descText}>{foodItemObject.name}</Text>
//       <Text style={styles.descPrice}>${foodItemObject.price.toFixed(2)}</Text>
//     </View>
//   )
// }
//
// mapster(orderArray, funky){
//   return orderArray.map(funky)
// }
