import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, TouchableHighlight} from 'react-native';
//import { addItem, addPrice } from '../actions/index.js';
import { Ionicons } from '@expo/vector-icons';
import Item from './item';

class ItemScroller extends Component {
  constructor(props){
    super(props);
    this.scrollMaker = this.scrollMaker.bind(this);
  }

  scrollMaker(inputArray, navi){
    return inputArray.map(function(index){
      return(
        <View>
        <Item foodItem={index} navi={navi} category={index}/>
        </View>
      )
    });
  }



  render(){
    console.log(this.props.category.entries.items)
  return(
    <View style={styles.relatedItemsView}>
    {this.scrollMaker(this.props.category.entries.items, this.props.navigation.navigate)}
    </View>
  )
}

}
export default ItemScroller;

const styles = StyleSheet.create({
  foodItem:{
    borderColor:'red',
    borderWidth: 1,
  },
  relatedItemsView:{
    width: '90%',
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //marginTop: 30,
    flexDirection: 'row',
    borderColor:'red',
    borderWidth: 4,
  },
  itemScroller:{
    height: 'auto',
    width: 150,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 1,
    backgroundColor: 'white',
    marginLeft: 2,
    marginRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemName:{
    fontWeight: 'bold',
  },
  itemPrice:{
    fontWeight: 'bold',
    color: 'green',
  }
})
