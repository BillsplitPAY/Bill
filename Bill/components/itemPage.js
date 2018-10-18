import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import Breaker from './breaker'
import { addItem, addPrice } from '../src/actions/index.js';


export default class ItemPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { navigate } = this.props.navigation;
    const itemName = this.props.navigation.state.params.screen.name;
    const itemDesc = this.props.navigation.state.params.screen.description;
    const itemPrice = this.props.navigation.state.params.screen.price;


    return(
      <View style={styles.itemPage}>

        <ScrollView>
          <View style ={styles.imageView}><Image style={styles.img} source= {require('../img/BreakfastSandwich.jpg')} /></View>
          <View style ={styles.descView}>
            <Text style={styles.foodTitle}>{this.props.navigation.state.params.screen.name}</Text>
            <Text style={styles.foodDesc}>{this.props.navigation.state.params.screen.description}</Text>
          </View>

        <Breaker value='Quantity'/>
        <View style={styles.descView}></View>
        <Breaker value='Item Special Selections'/>
        <View style={styles.descView}></View>
        <Breaker value='Requests'/>
        <View style={styles.descView}></View>

        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={() => {navigate('Menu'); this.props.screenProps.addItem(itemName, Number(itemPrice), itemDesc); this.props.screenProps.addPrice(Number(itemPrice))}}>
          <Text style={styles.buttonText}>Add To Cart</Text>
          <Text style={styles.price}>{this.props.navigation.state.params.screen.price}</Text>
        </TouchableOpacity>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemPage:{
    justifyContent: 'flex-end',
    height: 'auto',
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
    backgroundColor: 'rgb(114, 137, 143)',
    justifyContent: 'center',
  },
  breakerText:{
    color: 'rgb(25, 52, 65)',
    marginLeft: 12,

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
   }
})
