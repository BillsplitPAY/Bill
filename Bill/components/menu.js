//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import Items from './items.js';
import ScrollStuff from './scrollStuff.js';
import ItemsTest from './itemsTest.js';
import { StackNavigator } from 'react-navigation';



export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  static navigationOptions = {
    title: "Spring Garden"
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.menuPage}>

        <View style = {styles.scroller}><ScrollStuff /></View>

        <ScrollView>
          <View style = {styles.items}>
            <TouchableHighlight onPress={() => navigate("ScreenThree", {screen: 'ItemPage'})}><Items  /></TouchableHighlight>
          </View>
        </ScrollView>

      </View>
    );
  }

  componentDidMount(){
    console.log(this.props);
  }

}

const styles = StyleSheet.create({
  menuPage: {
    display: 'flex',
    //flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 'auto',
    width: 375,
  },
  header: {
    height: 55,
    flexDirection: 'column',
    //position: 'relative',
    justifyContent:'center',
    alignItems: 'center',
    //textAlign: 'center',
    backgroundColor: 'white',
    borderWidth: 0,
    //borderColor: 'red',
  },
  scroller: {
    height: 36,
    width: 'auto',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'green',
    //borderWidth: 0,
    //borderColor: 'black',
  },
  items: {
    position: 'relative',
    flexDirection: 'column',
    height: 'auto',
    backgroundColor: 'rgba(100, 119, 404, .4)',
    //borderWidth: 2,
    borderColor: 'blue',
  },
  headerText:{
    //textAlign: 'center',
    marginTop: 12,
    fontSize: 20,
    color: 'rgb(25, 52, 65)'

  },
});

//<ItemsTest item={this.props.menu.daily_menus[1].daily_menu} />

//<View style = {styles.header}><Text style={styles.headerText}>Spring Garden</Text></View>
