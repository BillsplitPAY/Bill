import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

const Item = (props) => {



console.log(props)
const setCurrentItem = props.screenProps.setCurrentItem
const setCategory = props.screenProps.setCategory
  return(
    <View style={styles.touchContainer}>
        <TouchableHighlight style={styles.touch} onPress={() => {setCurrentItem(props.foodItem); setCategory(props.category); props.navi('ItemPage', { screen: props.foodItem, other: props.category})}} >
        <View style={styles.innerTouch}>
              <Text style={[styles.foodName, {width: '83%', fontFamily: 'Futura',}]}>{props.foodItem.name}</Text>
              <Text style={[styles.foodPrice, {width: '17%', alignSelf: 'flex-end'}]}>${Number(props.foodItem.price).toFixed(0)}</Text>
            </View>
            </TouchableHighlight>
      </View>

    )
}

export default Item;

const styles = StyleSheet.create({
  // div surrounding all items

  touchContainer:{

    flexDirection: 'row',
    width: '48%',
    height: 'auto',
    marginRight: '2%'
  },

  touch:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderColor: '#dad9e2',
    borderWidth: .5,
    marginBottom: 2
  },
  innerTouch:{
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    backgroundColor: 'white',
    shadowOffset:{  width: 4,  height: 8,  },
    shadowColor: 'grey',
    shadowOpacity: .75,
    borderRadius: 3.5,
    padding: 5
  },

  foodName:{
    fontSize: 15,
    fontFamily: 'Avenir',
    color: 'black',
  },

  foodPrice:{
    color: 'green',

    fontSize: 13,
    textAlign: 'right',
    fontFamily: 'Futura',
  },

})
