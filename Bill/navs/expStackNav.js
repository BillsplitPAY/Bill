import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';

import { OrderStackNav } from './orderStackNav';
import Menu from '../components/menu';
import ItemPage from '../components/itemPage';
import Cart from '../components/cart';
import Order from '../components/order';
import Categories from '../components/categories';
import Hamburger from '../src/flexComponents/hamburger';
import { DrawerActions } from 'react-navigation';
import {TabNav} from './tabNav';
import PayType from '../components/payType';
import {orderTabNav} from './orderNav';
import EvenSplit from '../components/evenSplit';
import YourStuff from '../components/yourStuff';
import CustomAmount from '../components/customAmount';



export const expStackNav = StackNavigator({
   TabNav: {
     screen: TabNav,
     navigationOptions: {
       //title: 'Blah',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 0},
       // headerTintColor: 'white',
       // headerLeft: <Hamburger />
     }
   },

   ItemPage: {
     screen: ItemPage,
     navigationOptions: {
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'red',
       headerLeft: null
   },
},

PayType: {
  screen: PayType,
  navigationOptions: {
    headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
    headerTintColor: 'red',
    headerLeft: null
},
},
Order: {
  screen: orderTabNav,
  navigationOptions: {
    headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
    headerTintColor: 'red',
    headerLeft: null
},
},
EvenSplit: {
  screen: EvenSplit,
  navigationOptions: {
    headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
    headerTintColor: 'red',
    headerLeft: null
},
},
YourStuff: {
  screen: YourStuff,
  navigationOptions: {
    headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
    headerTintColor: 'red',
    headerLeft: null
},
},
CustomAmount: {
  screen: CustomAmount,
  navigationOptions: {
    headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
    headerTintColor: 'red',
    headerLeft: null
},
},

});
