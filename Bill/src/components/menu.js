//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, StatusBar} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
import { Hamburger } from '../flexComponents/hamburger'
import { StackNavigator } from 'react-navigation';
import {menuSetter} from '../helperFunctions/pureFunctions';

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
        <View style={styles.menuPage}>
        <StatusBar barStyle="light-content" />
          <ScrollStuff categories={Object.keys(this.props.screenProps.newMenu)} />
          <ScrollView>
            <View style = {styles.items, {borderWidth: 1}}>
              <Items screenProps = {this.props.screenProps} setCurrentItem={this.props.screenProps.setCurrentItem} setCategory={this.props.screenProps.setCategory} menu ={this.props.screenProps.newMenu} navigate={this.props.navigation.navigate}/>
            </View>
          </ScrollView>
        </View>
      );
    }

    else{
      return <Text>waiting</Text>
    }
    }


  componentDidMount(){
    const categoriesArray = this.props.screenProps.menu.response.menu.menus.items[0].entries.items
    this.props.screenProps.setMenu(menuSetter(categoriesArray));
    //transforms API menu object to more manageable menu object. Sets it to props.screenProps.newMenu.
  }
}


const styles = StyleSheet.create({
  menuPage: {
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    height: 'auto',
    width: '100%',
  },
  // scroller: {
  //   height: 36,
  //   width: 'auto',
  //   //flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  //   //backgroundColor: 'green',
  //   //borderWidth: 0,
  //   //borderColor: 'black',
  // },
  items: {
    position: 'relative',
    flexDirection: 'column',
    height: 'auto',
    backgroundColor: 'white',
    //borderWidth: 2,
    borderColor: 'blue',
    flexWrap: 'wrap',
  },
  button:{
    flexDirection: 'column',
    backgroundColor: 'rgb(25, 52, 65)',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
   buttonText:{
     color: 'white',
     fontWeight:'bold',
   },
   price:{
     alignSelf: 'flex-end',
     color: 'white',
   }
});
