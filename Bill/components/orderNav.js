import React from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import Order from './order';
import GroupOrder from './groupOrder';

export default createMaterialTopTabNavigator({
  Home: Order,
  Settings: GroupOrder,
}, { tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      activeBackgroundColor: 'rgb(114, 137, 143)',
      style: {
        backgroundColor: 'grey',
        fontSize: 10,
        fontFamily: 'Avenir',
      },
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Avenir',
        color: 'black',
        

      }
    }
  }
);
