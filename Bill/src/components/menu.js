import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import { Hamburger } from '../flexComponents/hamburger'
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';
import {styles_catScroller} from '../containers/container_catScroller'
import {styles_menuCategories, categoryBuilder} from '../containers/container_menuCategories'
import {styles_menu} from '../containers/container_menu'
import firebase from 'firebase'

const MenuCategories = (props) => {
    return(
      <View style={styles_menuCategories.unnecessary}>
        {categoryBuilder(props.screenProps.o_menu, props.navigate, props.screenProps.f_setCurrentItem, props.screenProps.f_setCategory, props.screenProps)}
      </View>
    )
}

const TopCatScroller = (props) => {
  return(
    <View style={styles_catScroller.scroller}>
      <ScrollView horizontal = {true}>
        <View style={styles_catScroller.scrollContainer}>
          {Object.keys(props.categories).map((index) => {return <TouchableHighlight key={index} onPress={()=>{props.refy.scrollTo({x: 0, y: props.screenProps.o_yPosition[index], animated: true})}} style={styles_catScroller.scr}><Text style = {styles_catScroller.text}>{index}</Text></TouchableHighlight>})}
        </View>
    </ScrollView>
  </View>
  )
}

export const tableTotal = (firebase)=>{
  return Object.values(firebase).map((index)=>{
    if(index.hasOwnProperty('order')){
      return index.order.reduce((acc, orderNumber)=>{
         return orderNumber.price + acc;
      }, 0)
    }
    else{
      return 0
    }
  })
}


export default class Menu extends Component {
  constructor(props){
    super(props);
    this.menuSetter = this.menuSetter.bind(this)
    // this.tableTotal = this.tableTotal.bind(this)
  }

  menuSetter(array){
    let newMenu = {};
   array.forEach(function(catObject){
     let key = catObject.name
     newMenu[key] = catObject.entries.items.map(function(index){
       return {name: index.name, desc: index.description, category: catObject.name, price: Number(index.price), id: index.entryId, options: index.options}
     });
   })
     return newMenu;
  }



  render() {
    const { navigate } = this.props.navigation.navigate
    // console.log(this.props.screenProps)

    if (this.props.screenProps.o_menu === {}){
      return <Text>Waiting for menu...</Text>
    }
    // console.log(this.props.screenProps)
      return (
        <View style={styles_menu.menuPage}>
        <StatusBar barStyle="light-content" />
          <TopCatScroller categories={this.props.screenProps.o_menu} screenProps={this.props.screenProps} refy={this.list} />
          <ScrollView ref={(ref) => this.list = ref}>
            <View style={styles_menu.items, {borderWidth: 1}}>
              <MenuCategories screenProps={this.props.screenProps} navigate={this.props.navigation.navigate}/>
            </View>
          </ScrollView>
        </View>
      )
  }

  componentDidMount(){
    const categoriesArray = this.props.screenProps.o_APIData.response.menu.menus.items[0].entries.items
    this.props.screenProps.f_setMenu(this.menuSetter(categoriesArray));
    // this.props.screenProps.f_updateTable(tableTotal(this.props.screenProps.o_firebase));
    this.props.screenProps.f_updateTable(tableTotal(this.props.screenProps.o_firebase).reduce((acc, price)=>{return price+acc}))

    firebase.database().ref('Restaurant/testTable').child('roulette').on('value', (snapshot)=>{this.props.navigation.navigate('Two'); console.log(this.state)})
    firebase.database().ref('Restaurant/testTable').child('roulette').once('value', (snapshot)=>{this.props.navigation.navigate('One'); console.log(this.state)})


    // console.log(tableTotal(this.props.screenProps.o_firebase))
    // console.log(Object.values(this.props.screenProps.o_firebase).map((index)=>{return index}))
    // tableTotal(){
    //   return Object.values(this.props.screenProps.o_firebase).map((index)=>{
    //     return index.order.reduce((acc, orderNumber)=>{
    //        return orderNumber.price + acc;
    //     }, 0)
    //   })
    // }



    // this.props.screenProps.f_updateTable((()=>{
    //   return Object.values(this.props.screenProps.o_firebase).map((index)=>{
    //     if (!index.order) {
    //       return 5000;
    //     }
    //     return index.order.reduce((acc, orderNumber)=>{
    //        return orderNumber.price + acc;
    //     }, 0)
    //   })
    // })())







    //transforms API menu object to more manageable menu object. Sets it to props.screenProps.o_menu.
  }
}
