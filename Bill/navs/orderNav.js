import React from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import Order from '../components/order';
import GroupOrder from '../components/groupOrder';

export const orderTabNav = createMaterialTopTabNavigator({
  Home: Order,
  Settings: GroupOrder,
}, { tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'white',
      activeBackgroundColor: 'rgb(114, 137, 143)',
      style: {
        backgroundColor: '#212121',
        fontSize: 30,
        fontFamily: 'Avenir',
      },
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Avenir',
        color: 'white',


      }
    }
  }
);
