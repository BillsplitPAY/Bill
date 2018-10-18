import React, { Component } from 'react';

import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView, NavigationActions } from 'react-navigation';
import { Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image } from 'react-native';
import { Container, Content, Icon, Header, Body } from 'native-base';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';

import Menu from '../components/menu.js';
import ItemPage from '../components/itemPage';
import Items from '../components/items';
import { MenuNav, CartNav, MenuNavy } from './stackNavs';
import { OrderStackNav } from './orderStackNav';
import Hamburger from '../src/flexComponents/hamburger'

export const TabNav = createBottomTabNavigator({
  Menu: {
    screen: MenuNav,
    tabNavigatorConfig: {
            tabBarLabel: 'Menu',
        },
  },

  Cart: {
    screen: CartNav,
    navigationOptions: {
            tabBarLabel: 'Cart',
            //tabBarIcon:() => <Ionicons size={ 20 } name={ 'basket' } color={ 'red' }/>
        }
  },

  Order: {
    screen: OrderStackNav,
  }
},

{
  animationEnabled: 'true',
  swipeEnabled: 'true',
  tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      animationEnabled: 'true',
      style: {
        backgroundColor: '#424242',
        fontSize: 20,
        fontFamily: 'Avenir',
      },
      labelStyle: {
        fontSize: 12,
        fontFamily: 'Avenir',
        marginBottom: 3,

      }
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        let iconName = 'basket'
        return <Ionicons name={'basket'} size={25} color={'black'} />;
      }
    })
  }
)

const styles = StyleSheet.create({
  hamburger:{
    color:'white',
  }
})
