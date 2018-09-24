import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import { OrderStackNav } from './orderStackNav';
import Menu from '../components/menu';
import ItemPage from '../components/itemPage';
import Cart from '../components/cart'


export const MenuNav = StackNavigator({
   Menu: {
     screen: Menu,
     navigationOptions: {
       title: 'Menu',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'white'
     }
   },
   ItemPage: {
     screen: ItemPage,
     navigationOptions: {
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'white',
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
   OrderStackNav: {
     screen: OrderStackNav,
     navigationOptions: {
       title: 'Cart',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'white'
     }
   }
 });
