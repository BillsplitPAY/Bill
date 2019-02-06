import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import { Hamburger } from '../flexComponents/hamburger'
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';
import {styles_catScroller} from '../containers/container_catScroller'
import {styles_menuCategories, categoryBuilder} from '../containers/container_menuCategories'
import {styles_menu, menuSetter} from '../containers/container_menu'

export const MenuCategories = (props) => {
    return(
      <View style={styles_menuCategories.unnecessary}>
        {categoryBuilder(props.menu, props.navigate, props.setCurrentItem, props.setCategory, props.screenProps)}
      </View>
    )
}

const CatScroller = (props) => {
  function itemCreator(array){
    return array.map((index) => {
      return <View key={index.name} style = {styles_catScroller.scr}><Text style = {styles_catScroller.text}>{index}</Text></View>
    })
  }
  return (
    <View style={styles_catScroller.scroller}>
      <ScrollView horizontal = {true}>
        <View style={styles_catScroller.scrollContainer}>{itemCreator(props.categories)}</View>
    </ScrollView>
  </View>
  );
}

export default class Menu extends Component {
  constructor(props){
    super(props);
  }
static navigationOptions = {
    title: 'Menu',
    headerStyle: {height: 0},
};

  render() {
    const { navigate } = this.props.navigation.navigate
    if (this.props.screenProps.newMenu !== 'whatever'){
      return (
        <View style={styles_menu.menuPage}>
        <StatusBar barStyle="light-content" />
          <CatScroller categories={Object.keys(this.props.screenProps.newMenu)} />
          <ScrollView>
            <View style = {styles_menu.items, {borderWidth: 1}}>
              <MenuCategories screenProps = {this.props.screenProps} setCurrentItem={this.props.screenProps.setCurrentItem} setCategory={this.props.screenProps.setCategory} menu ={this.props.screenProps.newMenu} navigate={this.props.navigation.navigate}/>
            </View>
          </ScrollView>
        </View>
      );
    }

    else{
      return <Text>Waiting for menu...</Text>
    }
  }

  componentDidMount(){
    const categoriesArray = this.props.screenProps.menu.response.menu.menus.items[0].entries.items
    this.props.screenProps.setMenu(menuSetter(categoriesArray));
    //transforms API menu object to more manageable menu object. Sets it to props.screenProps.newMenu.
  }
}
