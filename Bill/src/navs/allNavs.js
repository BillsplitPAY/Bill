import React, { Component } from 'react'
import { createBottomTabNavigator, createStackNavigator, addNavigationHelpers, NavigationActions, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchMenu, addItem, addPrice, submitOrder, emptyCart, tipUp, tipDown, setCategory, setMenu, setCurrentItem } from '../actions/index.js';
import { drawerContent } from './drawerContent';
import Scanny from '../flexComponents/qrScans';
import ItemPage from '../components/itemPage';
import PaymentPage, {YourStuffPay, SplitPay, PickPay, RoulettePay} from '../components/payPages/paymentPage';

import Menu from '../components/menu.js';
import Cart from '../components/cart';
import Order from '../components/order.js';
import {menuSetter} from '../helperFunctions/pureFunctions';
import { Ionicons } from '@expo/vector-icons';
import {Confirmation} from '../components/confirmation'

export const MenuStackNav = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 0, display: 'none'},
    },
  },
  ItemPage: {
    screen: ItemPage,
    navigationOptions: {
      headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 0, display: 'none'},
      headerLeft: null,
    },
  },
},
{ cardStyle: {backgroundColor: 'rgba(234, 235, 238, 1)'} }
)
//--------------------------------------------------------------------------------------

export const TabNav = createBottomTabNavigator({
  Menu: {
    screen: MenuStackNav,
    navigationOptions: {
            tabBarLabel: <View style={{alignItems: 'center', position:'relative', marginBottom: -30}}><Ionicons name="md-book" size={24} style={{color:'white'}}/><Text style={{color:'white', fontFamily: 'Futura', fontSize: 14,}}>Menu</Text></View>,
        },
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
            tabBarLabel: <View style={{alignItems: 'center', position:'relative', marginBottom: -30  }}><Ionicons name="md-cart" size={24} style={{color:'white'}}/><Text style={{color:'white', fontFamily: 'Futura', fontSize: 14,}}>Cart</Text></View>
            //tabBarIcon:() => <Ionicons size={ 20 } name={ 'basket' } color={ 'red' }/>
        },
  },
  Order: {
    screen: Order,
    navigationOptions:{
      tabBarLabel: <View style={{alignItems: 'center', position:'relative', marginBottom: -30, justifyContent: 'flex-start'}}><Ionicons name="md-color-wand" size={24} style={{color:'white'}}/><Text style={{fontFamily: 'Futura', fontSize: 14, color: 'white'}}>Options</Text></View>
    }
  }
},
{
  animationEnabled: 'true',
  swipeEnabled: 'true',
  tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      animationEnabled: 'true',
      style: {
        backgroundColor: '#212121',
        height: '8%',

        display: 'flex',
        justifyContent: 'center',
      },

    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        let iconName = 'basket'
        return <Ionicons name={'basket'} size={25} color={'black'} />;
      },
    }),

  }
)
//--------------------------------------------------------------------------------------
  const defaultHeaderStyle = {backgroundColor: 'rgba(231, 232, 235, 1)', height: 'auto', borderColor: 'red', borderWidth: 1, justifyContent: 'center', alignItems:'center', display:'none' }
  const defaultNavOptions = { headerStyle: defaultHeaderStyle, headerTintColor: '#212121', }

   export const inAppStackNav = createStackNavigator({
      TabNav: {
        screen: TabNav,
        navigationOptions: {
          headerStyle:{backgroundColor: 'green', borderBottomWidth: 0, height: 0, display: 'none'},
          headerVisible: false,
       },
      },
      PaymentPage: {
        screen: PaymentPage,
        navigationOptions: defaultNavOptions,
      },
     SplitPay: {
       screen: SplitPay,
       navigationOptions: defaultNavOptions,
     },
     PaymentPage: {
       screen: PaymentPage,
       navigationOptions: defaultNavOptions,
     },
     YourStuffPay: {
       screen: YourStuffPay,
       navigationOptions: defaultNavOptions,
     },
     PickPay: {
       screen: PickPay,
       navigationOptions: defaultNavOptions,
     },
     RoulettePay: {
       screen: RoulettePay,
       navigationOptions: defaultNavOptions,
     },

     Confirmation: {
       screen: Confirmation,
       navigationOptions: defaultNavOptions,
     },
   },{
      headerMode: 'screen',
      // cardStyle: {borderColor: 'green', borderWidth: 2}
});

 //   export const FullStackNav = createStackNavigator({
 //     Zero: {
 //       screen: inAppStackNav,
 //       navigationOptions: {
 //         headerStyle:{backgroundColor: 'green', borderBottomWidth: 0, height: 0, display: 'none'},
 //       },
 //     },
 //     One: {
 //       screen: Scanny,
 //       navigationOptions: {
 //         headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 0},
 //       },
 //     },
 //   },
 //   { cardStyle: { backgroundColor:'white' }
 //   }
 // )
