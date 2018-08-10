import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';

//import { Provider } from 'react-redux';
//import { connect } from 'react-redux';
//import store from './store.js';
import Menu from './menu.js';


export default class Appy extends React.Component {
  constructor(props){
    super(props);
    this.state = {results: 'naw'};
    this.vary = {}
  }

  render() {

    fetch('https://developers.zomato.com/api/v2.1/search?entity_id=94741&entity_type=zone&establishment_type=1', {
      headers: {
        'user-key': '276bd7f40b392f21cf03e6f4796431cd'
      }
    })
          .then((resp) => resp.json())
          .then((data) => this.setState({results: data}))

    if (this.state.results = 'naw'){
      return(
        <Text>'Nigga Wait!'</Text>
      )
    }

    return (
      //<Provider store={store}>
        <View style={styles.container}>
          <Menu data={this.state.results}/>
        </View>
      //</Provider>
    );
  }
  componentWillMount(){


      console.log(this.state)
  }
}



const styles = StyleSheet.create({
  container: {
    //flexDirection: 'column',
    backgroundColor: 'grey',
    //justifyContent: 'flex-start',
    //alignItems: 'center',
    height: 'auto',
    //width: 'auto',
  },
});
