import React, { Component } from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator, createStackNavigator, addNavigationHelpers, NavigationActions, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, Image, ActivityIndicator, StatusBar} from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchMenu, addItem, addPrice, submitOrder, emptyCart, tipUp, tipDown, fetchData, setCategory, setMenu, setCurrentItem } from '../actions/index.js';
import { drawerContent } from './drawerContent';
import {inAppStackNav} from './allNavs'
import Scanny from '../flexComponents/qrScans';
import firebase from 'firebase'
import signUp from '../components/signUp'
import signIn from '../components/signIn'
import TableRequest from '../components/TableRequest'
import {config} from '../../Firebase/firebaseConfig'


class MainNav extends Component {

  render(){
    if (this.props.menu === ''){
      return <Text style={styles.loading}>'loading'</Text>
    }
    else{
      return (
        <FullStackNav screenProps={this.props}/>
      )
  }
}

  componentDidMount(){
    firebase.initializeApp(config);
    {this.props.fetchMenu()}
    console.log(this.props);

}
}

   export const DrawerNav = createDrawerNavigator({
    //this is the slide out drawer navigator for the right side panel
    //in order to use add key/value pair to component as an object below
    //and within the component itself use the 'static' keyword, check examples
     Home: {
       screen: inAppStackNav,
     },

     signIn: {
       screen: signIn,
     },



     Scan: {
       screen: Scanny,
     },

     signUp: {
       screen: signUp,
     },

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
         headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 0,},
       },
     },

     One: {
       screen: TableRequest,
       navigationOptions: {
         headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 0},
       },
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
    category: state.category,
    newMenu: state.newMenu,
    currentItem: state.currentItem,
    user: state.user,
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
    color: 'white'
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
