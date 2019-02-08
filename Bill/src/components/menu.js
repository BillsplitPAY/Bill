import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import { Hamburger } from '../flexComponents/hamburger'
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';
import {styles_catScroller} from '../containers/container_catScroller'
import {styles_menuCategories, categoryBuilder} from '../containers/container_menuCategories'
import {styles_menu, menuSetter} from '../containers/container_menu'

const MenuCategories = (props) => {
  console.log(props)
    return(
      <View style={styles_menuCategories.unnecessary}>
        {categoryBuilder(props.screenProps.menu, props.navigate, props.screenProps.setCurrentItem, props.screenProps.setCategory, props.screenProps)}
      </View>
    )
}

const TopCatScroller = (props) => {
  return(
    <View style={styles_catScroller.scroller}>
      <ScrollView horizontal = {true}>
        <View style={styles_catScroller.scrollContainer}>
          {Object.keys(props.categories).map((index) => {return <View key={index} style = {styles_catScroller.scr}><Text style = {styles_catScroller.text}>{index}</Text></View>})}
        </View>
    </ScrollView>
  </View>
  )
}

export default class Menu extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation.navigate

    if (this.props.screenProps.menu === {}){
      return <Text>Waiting for menu...</Text>
    }
      return (
        <View style={styles_menu.menuPage}>
        <StatusBar barStyle="light-content" />
          <TopCatScroller categories={this.props.screenProps.menu}/>
          <ScrollView>
            <View style={styles_menu.items, {borderWidth: 1}}>
              <MenuCategories screenProps={this.props.screenProps} navigate={this.props.navigation.navigate}/>
            </View>
          </ScrollView>
        </View>
      )
  }

  componentDidMount(){
    const categoriesArray = this.props.screenProps.APIData.response.menu.menus.items[0].entries.items
    this.props.screenProps.setMenu(menuSetter(categoriesArray));
    //transforms API menu object to more manageable menu object. Sets it to props.screenProps.menu.
  }
}
