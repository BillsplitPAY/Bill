import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import { createStackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { OrderStackNav } from './orderStackNav';
import Menu from '../components/menu';
import ItemPage from '../components/itemPage';
import Cart from '../components/cart';
import Order from '../components/order';
import Items from '../components/items';
import Categories from '../components/categories';
import Hamburger from '../src/flexComponents/hamburger';
import { DrawerActions } from 'react-navigation';
import {TabNav} from './tabNav';
import PayType from '../components/payType';
import {orderTabNav} from './orderNav';
import EvenSplit from '../components/evenSplit';
import YourStuff from '../components/yourStuff';
import CustomAmount from '../components/customAmount';
import ItemScroller from '../src/flexComponents/itemScroller';



export const inAppStackNav = createStackNavigator({
   TabNav: {
     screen: TabNav,
     navigationOptions: {
       //title: 'Blah',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 15},
       // headerTintColor: 'white',
      headerRight: <Hamburger />
     }
   },

   Items: {
     screen: Items,
     navigationOptions: {
       headerStyle:{backgroundColor: 'white', borderBottomWidth: 0, height: 15},
       headerTintColor: 'black',
   },
},
   ItemPage: {
     screen: ItemPage,
     navigationOptions: {
       headerStyle:{backgroundColor: 'white', borderBottomWidth: 0, height: 15},
       headerTintColor: 'black',
   },
},
ItemScroller: {
  screen: ItemScroller,
  navigationOptions: {
    headerStyle:{backgroundColor: 'white', borderBottomWidth: 0, height: 15},
    headerTintColor: 'black',
},
},

PayType: {
  screen: PayType,
  navigationOptions: {
    headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
    headerTintColor: 'blue',
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
