import React, { Component } from 'react'
import { createMaterialTopTabNavigator, createBottomTabNavigator, createStackNavigator, addNavigationHelpers, NavigationActions, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchMenu, addItem, addPrice, submitOrder, emptyCart, tipUp, tipDown, fetchData } from '../src/actions/index.js';
import Hamburger from '../src/flexComponents/hamburger';
import { drawerContent } from './drawerContent';
import {inAppStackNav} from './inAppStackNav';
import Scanny from '../src/flexComponents/qrScans';
import config from '../Firebase/firebaseConfig'
import firebase from 'firebase'
import signUp from '../components/signUp'
import signIn from '../components/signIn'
import TableRequest from '../components/TableRequest'


class MainNav extends Component {
   
  render(){
    return (this.props.menu[1] !== 'load')
      ?
      <View style={styles.container}>
        <Text>Loading William...</Text>
        <ActivityIndicator size="large" />
      </View> 
      :
      <FullStackNav screenProps={this.props} />
}

  componentDidMount(){
    firebase.initializeApp(config); 
    this.props.fetchMenu()


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

     Hamburger: {
       screen: Hamburger,
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
         headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0, height: 0},
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
    user: state.user
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
