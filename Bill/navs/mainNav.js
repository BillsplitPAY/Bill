import React, { Component } from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator, createStackNavigator, addNavigationHelpers, NavigationActions, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchMenu, addItem, addPrice, submitOrder, emptyCart, tipUp, tipDown, fetchData } from '../src/actions/index.js';
import Hamburger from '../src/flexComponents/hamburger';
import { drawerContent } from './drawerContent';
import {inAppStackNav} from './inAppStackNav';
import Scanny from '../src/flexComponents/qrScans';

class MainNav extends Component {
  render(){
    if (this.props.menu[1] !== 'load'){
      return <Text style={styles.loading}>'loading'</Text>
    }
    return(
    <FullStackNav screenProps={this.props} />
  )
}

  componentDidMount(){
    {this.props.fetchMenu()}
  }
}

   export const DrawerNav = createDrawerNavigator({
     Home: {
       screen: inAppStackNav,
     },
     // Hamburger: {
     //   screen: Hamburger,
     // },

   }, {
       initialRouteName: 'Home',
       drawerPosition: 'right',
       contentComponent: drawerContent,
       drawerOpenRoute: 'DrawerOpen',
       drawerCloseRoute: 'DrawerClose',
       drawerToggleRoute: 'DrawerToggle',
       drawerWidth: 300,
   });

   export const FullStackNav = createStackNavigator({
     Zero: {
       screen: DrawerNav,
       navigationOptions: {
         headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 0},
       },
     },
     One: {
       screen: Scanny,
       navigationOptions: {
         headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 0},
       },
     },
   },
 )


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
