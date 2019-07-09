import React, { Component } from 'react'
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import { connect } from 'react-redux'
import {StyleSheet, Text, View} from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchAPIData, addItem, submitOrder, emptyCart, setTip, setCategory, setMenu, setCurrentItem, removeItem, yPos, updateName, toFirebase, clearFirebase, updateTable, addCustomPrice, subtractCustomPrice} from '../actions/index.js';
import { drawerContent } from './drawerContent';
import {inAppStackNav} from './allNavs'
import Scanny from '../flexComponents/qrScans';
import firebase from 'firebase'
import signUp from '../components/signUp'
import signIn from '../components/signIn'
import TableRequest from '../components/TableRequest'
import {config} from '../../Firebase/firebaseConfig'
import {styles_menu, menuSetter} from '../containers/container_menu'
import Welcome from '../components/welcome';
import {tableTotal} from '../components/menu'

import PaymentPage, {YourStuffPay, SplitPay, PickPay, RoulettePay} from '../components/payPages/paymentPage';

class MainNav extends Component {
  render(){
    if (this.props.APIData === ''){
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
    firebase.database().ref('Restaurant/testTable').on('value', (snapshot)=>{this.props.f_toFirebase(snapshot.val())})
    firebase.database().ref('Restaurant/testTable').on('value', (snapshot)=>{this.props.f_updateTable(tableTotal(this.props.o_firebase).reduce((acc, price)=>{return price+acc}))})
    this.props.f_fetchAPIData();
    console.log(this.props);

    // this.props.f_clearFirebase();

    // firebase.database().ref('Restaurant').on('value', (snapshot)=>{
    //   console.log(snapshot.val())
    //   this.props.f_toFirebase(snapshot.val())
    // })




    // this.props.setMenu(menuSetter(this.props.menu.response.menu.menus.items[0].entries.items));
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
       screen: Welcome,
       navigationOptions: {
         headerStyle:{backgroundColor: '#212121', height: 0, display: 'none'},
         gesturesEnabled: false,
       },
     },
     One: {
       screen: DrawerNav,
       navigationOptions: {
         headerStyle:{backgroundColor: 'red', height: 0, display: 'none'},
         headerLeft: null,
         gesturesEnabled: false,
       },
     },
   })

//Maps the state object properties to React props so the data can be passed down components
function mapStateToProps(state){
  return {
    o_APIData: state.APIData,
    o_cart: state.cart,
    // price: state.price,
    o_order: state.order,
    o_tip: state.tip,
    o_category: state.category,
    o_menu: state.menu,
    o_currentItem: state.currentItem,
    o_user: state.user,
    o_yPosition: state.yPosition,
    o_firebase: state.firebase,
    o_table: state.table,

  }
}
//Maps the action creators to component functions so they can be called on components

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      f_fetchAPIData: fetchAPIData,
      f_addItem: addItem,
      f_removeItem: removeItem,
      f_submitOrder: submitOrder,
      f_emptyCart: emptyCart,
      f_setCategory: setCategory,
      f_setMenu: setMenu,
      f_setCurrentItem: setCurrentItem,
      f_updateName: updateName,
      f_yPos: yPos,
      f_setTip: setTip,
      f_toFirebase: toFirebase,
      f_clearFirebase: clearFirebase,
      f_updateTable: updateTable,
      f_addCustomPrice: addCustomPrice,
      f_subtractCustomPrice: subtractCustomPrice,

    }, dispatch)
}
//connects the mapped state object properties and action creators to props on this component
export default connect(mapStateToProps, mapDispatchToProps)(MainNav)

const styles = StyleSheet.create({

  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  drawerHeader: { height: 200, backgroundColor: 'white' },
  drawerImage: { height: 150, width: 150, borderRadius: 75 },
  userName: { color: '#252326', fontWeight: '800', marginTop: 10, marginBottom: 10, fontSize: 20 },
  loading:{ textAlign: 'center', marginTop: '50%', color: 'white' },
  contain: { flex: 1, justifyContent: 'center', alignItems: 'center', width: 100, },
  icon: { width: 24, height: 24, },
})
