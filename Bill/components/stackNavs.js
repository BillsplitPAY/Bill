import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation'

import Menu from './menu';
import OrderNav from './orderNav';
import PayType from './payType';
import ItemPage from './itemPage';
import Cart from './cart'


export const MenuNav = StackNavigator({
   ScreenOne: {
     screen: Menu,
     navigationOptions: {
       title: 'Menu',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'white'
     }
   },
   ScreenTwo: {
     screen: ItemPage,
     navigationOptions: {
       title: 'Cart',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'white'

   },
}
});

export const CartNav = StackNavigator({
   ScreenOne: {
     screen: Cart,
     navigationOptions: {
       title: 'Cart',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'white'
     }
   },
 });

export const OrderStackNav = StackNavigator({
   ScreenOne: {
     screen: OrderNav,
     navigationOptions: {
       title: 'Order',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'white'
     },
   },
   ScreenTwo: { screen: PayType},
});
