import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';

export default class ItemPage extends Component{

  render(){
    return(
      <View style={styles.itemPage}>
      <ScrollView>
      <View style ={styles.imageView}><Image style={styles.img} source= {require('../img/BreakfastSandwich.jpg')} /></View>

      <View style ={styles.descView}>
        <Text style={styles.foodTitle}>Bacon, Egg and Cheese</Text>
        <Text style={styles.foodDesc}>The greatest sandwich ever invented.</Text>
      </View>

      <View style={styles.breaker}><Text style={styles.breakerText}>Quantity</Text></View>

      <View style={styles.descView}></View>

      <View style={styles.breaker}><Text style={styles.breakerText}>Item Special Selections</Text></View>

      <View style={styles.descView}></View>

      <View style={styles.breaker}><Text style={styles.breakerText}>Requests</Text></View>

      <View style={styles.descView}></View>

      </ScrollView>
      <TouchableOpacity style={styles.button} color=''><Text style={styles.buttonText}>Add To Order</Text></TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemPage:{
    //justifyContent: 'flex-end',
    height: 667,
  },
  imageView: {
    height: 212,
    //borderColor: 'black',
    //borderWidth: 1,
    backgroundColor:'grey',
  },
  img:{
    position: 'relative',
    flexShrink:1,
    width: '100%',

  },
  descView:{
    height: 110,
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'white',
    justifyContent: 'space-around',
  },
  foodTitle:{
    fontWeight: 'bold',
    marginLeft: 12,
  },
  foodDesc:{
    marginLeft: 12,
  },
  breaker:{
    height: 25,
    backgroundColor: 'rgb(62, 96, 111)',
    justifyContent: 'center',
  },
  breakerText:{
    color: 'rgb(25, 52, 65)',
    marginLeft: 12,

  },
  button:{
    backgroundColor: 'rgb(25, 52, 65)',
    height: 120,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
   buttonText:{
     color: 'black',
     fontWeight:'bold',
     marginTop:20,
   }
})
