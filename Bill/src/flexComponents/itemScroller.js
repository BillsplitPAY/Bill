import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, TouchableHighlight} from 'react-native';
//import { addItem, addPrice } from '../src/actions/index.js';
import { Ionicons } from '@expo/vector-icons';

class ItemScroller extends Component {
  constructor(props){
    super(props);
    this.scrollMaker = this.scrollMaker.bind(this);
  }

  scrollMaker(inputArray, navi){
    return inputArray.map(function(index){
      return(
        <TouchableHighlight style={styles.itemScroller} onPress={() => {navi.navigate('ItemPage')}}>
          <View>
              <Text style={styles.itemName}>{index.name}</Text>
              <Text style={styles.itemName}>{index.options}</Text>
              <Text style={styles.itemPrice}>${index.price}</Text>
          </View>
        </TouchableHighlight>
      )
    });
  }

  render(){
  return(
    <View style={styles.relatedItemsView}>
    {this.scrollMaker(this.props.category.entries.items, this.props.navigation)}
    </View>
  )
}

}
export default ItemScroller;

const styles = StyleSheet.create({
  relatedItemsView:{
    width: '90%',
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //marginTop: 30,
    flexDirection: 'row',
  },
  itemScroller:{
    height: '100%',
    width: 150,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
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
