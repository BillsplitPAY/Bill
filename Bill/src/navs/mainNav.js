import React, { Component } from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator, createStackNavigator, addNavigationHelpers, NavigationActions, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchMenu, addItem, addPrice, submitOrder, emptyCart, tipUp, tipDown, fetchData, setCategory, setMenu, setCurrentItem } from '../actions/index.js';
import { drawerContent } from './drawerContent';
import {FullStackNav} from './allNavs'
import Scanny from '../flexComponents/qrScans';

class MainNav extends Component {
  render(){
    if (this.props.menu === ''){
      return <Text style={styles.loading}>'loading'</Text>
    }
    else{
      return <FullStackNav screenProps={this.props}/>
  }
}

  componentDidMount(){
    {this.props.fetchMenu()}
    console.log(this.props);

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
    category: state.category,
    newMenu: state.newMenu,
    currentItem: state.currentItem,
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
      setCategory: setCategory,
      setMenu: setMenu,
      setCurrentItem: setCurrentItem,
      tipUp: tipUp,
      tipDown: tipDown
    }, dispatch)
}
//connects the mapped state object properties and action creators to props on this component
export default connect(mapStateToProps, mapDispatchToProps)(MainNav)

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
