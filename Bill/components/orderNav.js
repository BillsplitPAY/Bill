import React from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import Order from './order';
import GroupOrder from './groupOrder';

export default createBottomTabNavigator({
  Home: Order,
  Settings: GroupOrder,
}, { tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      activeBackgroundColor: 'rgb(114, 137, 143)',
      style: {
        backgroundColor: 'rgb(114, 137, 143)',
        fontSize: 15,
        fontFamily: 'Avenir',
      },
      labelStyle: {
        fontSize: 19,
        fontFamily: 'Avenir',
        color: 'black',
        marginBottom: 10,

      }
    }
  }
);
