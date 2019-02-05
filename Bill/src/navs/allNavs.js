import React, { Component } from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator, createStackNavigator, addNavigationHelpers, NavigationActions, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchMenu, addItem, addPrice, submitOrder, emptyCart, tipUp, tipDown, fetchData, setCategory, setMenu, setCurrentItem } from '../actions/index.js';
import { drawerContent } from './drawerContent';
import Scanny from '../flexComponents/qrScans';
import Items from '../components/items';
import ItemPage from '../components/itemPage';


import EvenSplit from '../components/evenSplit';
import YourStuff from '../components/yourStuff';
import CustomAmount from '../components/customAmount';
import Menu from '../components/menu.js';
import Cart from '../components/cart';
import Order from '../components/order.js';

import ScrollStuff from '../components/scrollStuff';
import {menuSetter} from '../helperFunctions/pureFunctions';

//import {orderTabNav} from './orderNav';
import { Ionicons } from '@expo/vector-icons';

export const MenuNav = createStackNavigator({
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
},{
  cardStyle: {backgroundColor: 'rgba(234, 235, 238, 1)'}
}
)

export const TabNav = createBottomTabNavigator({
  Menu: {
    screen: MenuNav,
    navigationOptions: {
            tabBarLabel: <View style={{alignItems: 'center', marginBottom: 20}}><Ionicons name="md-book" size={24} style={{color:'white'}}/><Text style={{color:'white', fontFamily: 'Futura', fontSize: 14,}}>Menu</Text></View>,
        },
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
            tabBarLabel: <View style={{alignItems: 'center', marginBottom: 20}}><Ionicons name="md-cart" size={24} style={{color:'white'}}/><Text style={{color:'white', fontFamily: 'Futura', fontSize: 14,}}>Cart</Text></View>
            //tabBarIcon:() => <Ionicons size={ 20 } name={ 'basket' } color={ 'red' }/>
        },
  },
  Order: {
    screen: Order,
    navigationOptions:{
      tabBarLabel: <View style={{alignItems: 'center', marginBottom: 20}}><Ionicons name="md-color-wand" size={24} style={{color:'white'}}/><Text style={{fontFamily: 'Futura', fontSize: 14, color: 'white'}}>Options</Text></View>
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
        //fontSize: 20,
        //fontFamily: 'Futura',

        height: 75,
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
      },
    }),

  }
)
   export const inAppStackNav = createStackNavigator({
      TabNav: {
        screen: TabNav,
        navigationOptions: {
          //title: 'Blah',
          headerStyle:{backgroundColor: 'green', borderBottomWidth: 0, height: 0, display: 'none'},
          headerVisible: false,
          // headerTintColor: 'white',
         //headerRight: <Hamburger />
       },
      },
      Items: {
        screen: Items,
        navigationOptions: {
          headerStyle:{backgroundColor: 'white', borderBottomWidth: 0, height: 0},
          headerTintColor: 'black',
      },
   },
      ScrollStuff: {
        screen: ScrollStuff,
        navigationOptions: {
          headerStyle:{backgroundColor: 'white', borderBottomWidth: 0, height: 0},
          headerTintColor: 'black',
      },
   },



   Order: {
     screen: Order,
     navigationOptions: {
       headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
       headerTintColor: 'red',
       headerLeft: null
     },
   },
   EvenSplit: {
     screen: EvenSplit,
     navigationOptions: {
       headerStyle:{backgroundColor: 'rgba(231, 232, 235, 1)', borderBottomWidth: 0, height: 0},
       headerTintColor: '#212121',
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
 },
 {
   cardStyle: {backgroundColor: 'rgba(234, 235, 238, 1)'},

 }
);

   export const FullStackNav = createStackNavigator({
     Zero: {
       screen: inAppStackNav,
       navigationOptions: {
         headerStyle:{backgroundColor: 'green', borderBottomWidth: 0, height: 0, display: 'none'},
       },
     },
     One: {
       screen: Scanny,
       navigationOptions: {
         headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 0},
       },
     },
   },
   {
     cardStyle: {
       backgroundColor:'white'
     }
   }
 )

//Maps the state object properties to React props so the data can be passed down components


const styles = StyleSheet.create({

  dimensions:{
    borderWidth: 2,
    borderColor: 'red',
    height: '90%',
    marginTop: 35,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  },
  userName: {
    color: '#252326',
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20
  },
  loading:{
    textAlign: 'center',
    marginTop: '50%',
  },
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,

  },
  icon: {
    width: 24,
    height: 24,
  },
})
