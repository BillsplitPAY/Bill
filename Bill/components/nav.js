import Menu from './menu';
import ItemPage from './itemPage';
import Items from './items';
import DrawerNav from './drawerNav';
import Cart from './cart';
import MasterOrder from './masterOrder';
//import Order from './order';
import OrderNav from './orderNav';
import MainNav from './mainNav';
import PayType from './payType'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchMenu, addItem, addPrice, submitOrder, emptyCart } from '../src/actions/index.js';

 const StackNav = StackNavigator({
    ScreenOne: { screen: MainNav, navigationOptions: {title: 'Menu', headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0}, headerTintColor: 'white' }},
    ScreenTwo: { screen: Items},
    ScreenThree: {screen: ItemPage},
    ScreenFour: {screen: Cart},
    ScreenFive: { screen: OrderNav},
    ScreenSix: { screen: PayType},
    ScreenSeven: { screen: Categories},
});

//Nav Component_____________________________________________________________________________

class Nav extends React.Component {
  render(){
    if (this.props.menu[1] !== 'load'){
      return <Text style={styles.loading}>'loading'</Text>
    }
    return(
              <StackNav screenProps={this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

//Styles____________________________________________________________________________

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
