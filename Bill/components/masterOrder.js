//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
//import DrawerNav from './drawerNav.js';
import { StackNavigator } from 'react-navigation';

export default class MasterOrder extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    title: "Master Order"
  }

  render() {
    //const { navigate } = this.props.navigation

    return (
      <View style={styles.orderPage}>
      <View style={styles.breaker}><Text style={styles.breakerText}>Table Order</Text></View>
      <View style={styles.descView}>
        <Text>this.props.screenProps</Text>
      </View>
    </View>
      );
    }
  }

  const styles = StyleSheet.create({
    orderPage:{
      justifyContent: 'space-between',
      height: '100%',
    },

    descView:{
      height: 'auto',
      //borderBottomColor: 'black',
      //borderBottomWidth: 1,
      backgroundColor:'white',
      justifyContent: 'space-between',
      flexGrow: 1,
      margin: 10,

    },
    inDesc:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      //marginBottom: 20,
    },
    descText:{
      marginLeft: 15,
      //width: 220,
      flexGrow: 2,
      //width: 200,
    },
    descItems:{
      //marginLeft: 15,
      flexShrink: 2,
      //width: 200,
    },
    descPrice:{
      //marginLeft: 50,
    },
    breaker:{
      height: 25,
      backgroundColor: 'rgb(114, 137, 143)',
      justifyContent: 'center',
    },
    breakerText:{
      color: 'rgb(25, 52, 65)',
      marginLeft: 12,
      fontWeight: '600',

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
       fontWeight:'bold',
     },
     textBox:{
       height: 55,
       width: '90%',
       borderColor: 'grey',
       borderWidth: 1,
       margin: 10,
       color: 'grey',
     },

  })
