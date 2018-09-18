import React, { Component } from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import Menu from './menu';
import Cart from './cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderNav from './orderNav';

import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchMenu, addItem, addPrice, submitOrder, emptyCart } from '../src/actions/index.js';
import { MenuNav, OrderStackNav, CartNav } from './stackNavs';

const TabNav = createBottomTabNavigator({
  Menu: {
    screen: MenuNav,
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

Cart: {
  screen: CartNav,
  navigationOptions: {
          tabBarLabel: 'Cart',
          headerTitle: 'Cart',
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

Order: {
  screen: OrderStackNav
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


class MainNav extends Component {
  render(){
    if (this.props.menu[1] !== 'load'){
      return <Text style={styles.loading}>'loading'</Text>
    }
    return(
    <TabNav screenProps={this.props} />
  )
}
componentDidMount(){
  {this.props.fetchMenu()}
}
}


//Map Functions____________________________________________________________________________

function mapStateToProps(state){
return {
  menu: state.menu,
  cart: state.cart,
  price: state.price,
  order: state.order,
  //
  //[0].response.menu.menus.items[2].entries.items,
}
}

function mapDispatchToProps(dispatch){
return bindActionCreators(
  {
    fetchMenu: fetchMenu,
    addItem: addItem,
    addPrice: addPrice,
    submitOrder: submitOrder,
    emptyCart: emptyCart,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNav)

const styles = StyleSheet.create({

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
  }

})
