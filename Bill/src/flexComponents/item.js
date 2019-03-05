import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

const Item = (props) => {

const setCurrentItem = props.screenProps.setCurrentItem
const setCategory = props.screenProps.setCategory
  return(

        <TouchableHighlight style={[styles.itemContainer]} onPress={() => {setCurrentItem(props.foodItem); setCategory(props.category); props.navi('ItemPage')}} >
        <View style={styles.innerTouch}>
              <Text style={styles.foodName}>{props.foodItem.name}</Text>
              <Text style={styles.foodPrice}>{(isNaN(props.foodItem.price)) ? '':`${Number(props.foodItem.price).toFixed(0)}`}</Text>
            </View>
            </TouchableHighlight>

    )
}

export default Item;

const styles = StyleSheet.create({

  itemContainer:{ width: '100%', height: 'auto', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', borderBottomColor: '#dad9e2', borderBottomWidth: .5, marginBottom: 0, },

  innerTouch:{ minHeight: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 2, backgroundColor: 'white', shadowOffset:{  width: 4,  height: 8,  }, shadowColor: 'grey', shadowOpacity: .75, padding: 5, borderColor: '#212121', borderWidth: .5, },

  foodName:{fontFamily: 'GillSans', color: 'black', width: '83%', fontSize: 20},

  foodPrice:{ color: 'green', textAlign: 'right', fontFamily: 'GillSans', width: '17%', fontSize: 19},
})
