import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import { Hamburger } from '../flexComponents/hamburger'
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';
import {styles_catScroller} from '../containers/container_catScroller'
import {styles_menuCategories, categoryBuilder} from '../containers/container_menuCategories'
import {styles_menu, menuSetter} from '../containers/container_menu'

const MenuCategories = (props) => {
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
          {Object.keys(props.categories).map((index) => {return <TouchableHighlight key={index} onPress={()=>{props.refy.scrollTo({x: 0, y: props.screenProps.yPosition[index], animated: true})}} style={styles_catScroller.scr}><Text style = {styles_catScroller.text}>{index}</Text></TouchableHighlight>})}
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
    console.log(this.props.screenProps)

    if (this.props.screenProps.menu === {}){
      return <Text>Waiting for menu...</Text>
    }
      return (
        <View style={styles_menu.menuPage}>
        <StatusBar barStyle="light-content" />
          <TopCatScroller categories={this.props.screenProps.menu} screenProps={this.props.screenProps} refy={this.list} />
          <ScrollView ref={(ref) => this.list = ref}>
            <View style={styles_menu.items, {borderWidth: 1}}>
              <MenuCategories screenProps={this.props.screenProps} navigate={this.props.navigation.navigate}/>
            </View>
          </ScrollView>
        </View>
      )
  }

  componentDidMount(){
    const categoriesArray = this.props.screenProps.APIData.response.menu.menus.items[0].entries.items
    console.log(categoriesArray)
    this.props.screenProps.setMenu(menuSetter(categoriesArray));
    //transforms API menu object to more manageable menu object. Sets it to props.screenProps.menu.
  }
}
