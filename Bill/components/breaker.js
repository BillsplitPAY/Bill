import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';


export default class Breaker extends React.Component{

  render(){
    return(
    <View style={styles.breaker}><Text style={styles.breakerText}>{this.props.value}</Text></View>
    // <View style={styles.descView}>
    //   {this.mappy(this.props.screenProps.yo.order.items)}
    // </View>
  )
  }
}

const styles = StyleSheet.create({

  descView:{
    height: 'auto',
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'white',
    justifyContent: 'space-between',
    flexGrow: 1,
    margin: 10,
  },

  breaker:{
    height: 25,
    backgroundColor: 'rgb(114, 137, 143)',
    justifyContent: 'center',
  },

  breakerText:{
    color: 'rgb(25, 52, 65)',
    marginRight: 12,
    fontWeight: '600',
    textAlign: 'right',
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
