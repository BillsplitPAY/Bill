import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import Breaker from '../flexComponents/breaker';
import Item from '../flexComponents/item';

export const categoryBuilder = (obj, navigate, setItem, setCat, screenProps) => {
  return Object.values(obj).map(category => {
    return(
    <View key={category}style={{backgroundColor: '#edeef0'}}>
      <Breaker value={category[0].category}/>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'flex-start', alignItems: 'flex-start', backgroundColor: '#edeef0',  margin: '1.8%', height: 'auto'}}>
      {category.map(function(item){return <Item key={item.name} foodItem={item} category={category} navi={navigate} screenProps={screenProps}/>})}
      </View>
    </View>
    )
  })
}

export const styles_menuCategories = {
  unnecessary:{ width: 'auto', height: 'auto', },

  touch:{ width: '48%', backgroundColor: '#e8e4e4', marginBottom: 8, },

  itemz: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', width: 'auto', height: 'auto', borderColor: 'rgba(114, 137, 143, 0.29)', },

  textBox:{ flexDirection: 'column', flexShrink: 2, justifyContent: 'space-around', height: 'auto' },

  foodName:{ fontSize: 15, fontFamily: 'Avenir', color: 'black', },

  foodDescription:{ fontSize: 17, color: 'black', },

  foodPrice:{ color: 'green', fontSize: 13, textAlign: 'right', fontFamily: 'Futura', },

  imgBox:{ height: 75, width: 75, marginRight: 5, marginTop: 5, marginLeft: 5, },

  img:{ height: 75, width: 75, },

  breaker:{ height: 25, backgroundColor: 'rgb(114, 137, 143)', justifyContent: 'center', },

  breakerText:{ color: 'rgb(25, 52, 65)', marginLeft: 12, },
}
