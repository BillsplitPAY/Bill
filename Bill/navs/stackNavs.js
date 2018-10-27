import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import { createStackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';

import { OrderStackNav } from './orderStackNav';
import Menu from '../components/menu';
import ItemPage from '../components/itemPage';
import Cart from '../components/cart';
import Categories from '../components/categories';
import Hamburger from '../src/flexComponents/hamburger';
import { DrawerActions } from 'react-navigation';



export const MenuNav = createStackNavigator({
   Menu: {
     screen: Menu,
     navigationOptions: {
       title: 'Menu',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 40},
       headerTintColor: 'white',
       headerLeft: <Hamburger />
     }
   },

   ItemPage: {
     screen: ItemPage,
     navigationOptions: {
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'red',
       headerLeft: null
   },
}
});

export const CartNav = createStackNavigator({
   ScreenOne: {
     screen: Cart,
     navigationOptions: {
       title: 'Cart',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'white',
       headerLeft: <Hamburger onPress={() => {this.props.navigation.dispatch(DrawerActions.openDrawer());}}/>
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

 const styles = StyleSheet.create({
   hamburger: {
     color: 'white',
     fontSize: 30,
     marginLeft: 20
   }

 })
