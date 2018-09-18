import React from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import Menu from './menu';
import Cart from './cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderNav from './orderNav';


export default createBottomTabNavigator({
  Home: {
    screen: Menu,
    navigationOptions: {
            tabBarLabel: 'Menu',
            headerTitle: 'Menu',
            headerTintColor: 'black',
            headerStyle:{
              backgroundColor: 'black',
            },
            headerTitleStyle:{
              color: 'black',
            }
            //tabBarIcon:() => <Ionicons size={ 20 } name={ 'basket' } color={ 'red' }/>
        }
  },

Settings: {
  screen: Cart,
},

Order: {
  screen: OrderNav
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
        fontSize: 15,
        fontFamily: 'Avenir',
      },
      labelStyle: {
        fontSize: 12,
        fontFamily: 'Avenir',
        //color: 'black',
        marginBottom: 3,

      }
    },
  },

  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        let iconName = 'basket'
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={'basket'} size={25} color={'black'} />;
      }
    }
  )
}
)
