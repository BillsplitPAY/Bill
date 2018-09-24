import React, { Component } from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

//imports the action creator functions to be bound to props below.
import { fetchMenu, addItem, addPrice, submitOrder, emptyCart, tipUp, tipDown } from '../src/actions/index.js';

import { MenuNav, CartNav } from './stackNavs';
import { OrderStackNav } from './orderStackNav';


//console.log(this.props);

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
            },
            tabBarVisible: (function(){
              console.log(global)
            //   if (this.props.navigation.state.routeName === "Menu"){
            //   return false
            // }
            // else{
            //   return false

          }())


            //tabBarIcon:() => <Ionicons size={ 20 } name={ 'basket' } color={ 'red' }/>
        },

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
        fontSize: 15,
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

class MainNav extends Component {
  render(){
    if (this.props.menu[1] !== 'load'){
      return <Text style={styles.loading}>'loading'</Text>
    }
    return(
      //Passes all props here (ACs and state props) to screen components of TabNav
    <TabNav screenProps={this.props} />
  )
}
/*All actions involving State begin here. fetchMenu is an action creator function that fetches
the menu and sends it to the Menu reducer where it is applied to the menu property on the state object.*/
  componentDidMount(){
    {this.props.fetchMenu()}
  }
}

//Maps the state object properties to React props so the data can be passed down components
function mapStateToProps(state){
  return {
    menu: state.menu,
    cart: state.cart,
    price: state.price,
    order: state.order,
    tip: state.tip,

  }
}
//Maps the action creators to component functions so they can be called on components
function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      fetchMenu: fetchMenu,
      addItem: addItem,
      addPrice: addPrice,
      submitOrder: submitOrder,
      emptyCart: emptyCart,
      tipUp: tipUp,
      tipDown: tipDown
    }, dispatch)
}
//connects the mapped state object properties and action creators to props on this component
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
