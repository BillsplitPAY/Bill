import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import { Hamburger } from '../flexComponents/hamburger'
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';
import {styles_catScroller} from '../containers/container_catScroller'
import {styles_menuCategories, categoryBuilder} from '../containers/container_menuCategories'
import {styles_menu} from '../containers/container_menu'

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



export default class Menu extends Component {
  constructor(props){
    super(props);
    this.menuSetter = this.menuSetter.bind(this)
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
    // console.log(categoriesArray)
    this.props.screenProps.f_setMenu(this.menuSetter(categoriesArray));

    //transforms API menu object to more manageable menu object. Sets it to props.screenProps.o_menu.
  }
}
