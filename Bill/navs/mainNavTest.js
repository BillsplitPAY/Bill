import React, { Component } from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator, DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

//imports the action creator functions to be bound to props below.
import { fetchMenu, fetchData, addItem, addPrice, submitOrder, emptyCart, tipUp, tipDown } from '../src/actions/index.js';
import { createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import { MenuNav, CartNav } from './stackNavs';
import { OrderStackNav } from './orderStackNav';
import { TabNav, TabNavy } from './tabNav';
import Hamburger from '../src/flexComponents/hamburger';
import { CustomDrawerContentComponent } from './drawerContent';
import Scanny from '../src/flexComponents/qrScans';




class MainNavTest extends Component {
  render(){
    return(
    <FullStackNav screenProps={this.props} />
  )
}

  componentDidMount(){
    // {this.props.fetchMenu()}
  }
}



   export const DrawerNav = DrawerNavigator({
     Home: {
       screen: TabNav,
     },
     Hamburger: {
       screen: Hamburger,
     },

   }, {
       initialRouteName: 'Home',
       drawerPosition: 'left',
       contentComponent: CustomDrawerContentComponent,
       drawerOpenRoute: 'DrawerOpen',
       drawerCloseRoute: 'DrawerClose',
       drawerToggleRoute: 'DrawerToggle',
       drawerWidth: 300,
   });

   export const FullStackNav = StackNavigator({
     One: {
       screen: Scanny
     },
     Two: {
       screen: DrawerNav
     },
   })


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
      fetchData: fetchData,
      addItem: addItem,
      addPrice: addPrice,
      submitOrder: submitOrder,
      emptyCart: emptyCart,
      tipUp: tipUp,
      tipDown: tipDown
    }, dispatch)
}
//connects the mapped state object properties and action creators to props on this component
export default connect(mapStateToProps, mapDispatchToProps)(MainNavTest)

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
