import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation'

import OrderNav from './orderNav';
import PayType from '../components/payType';
import EvenSplit from '../components/evenSplit';
import YourStuff from '../components/yourStuff';
import Confirm from '../components/confirm';
import CustomAmount from '../components/customAmount';
import Order from '../components/order'

export const OrderStackNav = StackNavigator({
   ScreenOne: {
     screen: Order,
     headerMode: 'none',
     navigationOptions: {
       //title: 'Order',
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 1},
       //headerTintColor: 'white',
       headerVisible: false,
     },
   },
   ScreenTwo: { screen: PayType},
   EvenSplit: {screen: EvenSplit},
   YourStuff: {screen: YourStuff},
   CustomAmount: {screen: CustomAmount},
   Confirm: {screen: Confirm}
});
