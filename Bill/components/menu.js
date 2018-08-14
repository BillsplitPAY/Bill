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
    this.state = {results: 'naw', load: 'naw'}
  }
  static navigationOptions = {
    title: "Spring Garden"
  }

  render() {
    const { navigate } = this.props.navigation

    if (this.state.load === 'naw'){
      return(
        <View style={styles.wait}><Text>'Nigga Wait!'</Text></View>
      )
    }
    else{
      return (
        <View style={styles.menuPage}>


        <View style={styles.scroller}><ScrollStuff /></View>

        <ScrollView>
        <View style = {styles.items}>

        <TouchableHighlight onPress={() => {navigate("ScreenTwo", {screen: "ItemPage"})}}><ItemsTest item={this.state.results.daily_menus[1].daily_menu} /></TouchableHighlight>

        </View>
        </ScrollView>

        </View>
      );
    }
  }

  componentDidMount(){

    fetch('https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624', {
      headers: {
        'user-key': '276bd7f40b392f21cf03e6f4796431cd'
      }
    })
          .then((resp) => resp.json())
          .then((data) => {
            this.setState({results: data});
            this.setState({load: 'yep',});
            console.log(this.state);
          });
    console.log(this.state);
  }

  // componentDidMount(){
  //   console.log(this.props);
  //
  //     fetch('https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624', {
  //       headers: {
  //         'user-key': '276bd7f40b392f21cf03e6f4796431cd'
  //       }
  //     })
  //           .then((resp) => resp.json())
  //           .then((data) => {
  //             this.setState({results: data});
  //             this.setState({load: 'yep',});
  //             console.log(this.state);
  //           });
  //
  //   }
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

//<View style={styles.header}><Text style={styles.headerText}>Spring Garden</Text></View>
//https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624
