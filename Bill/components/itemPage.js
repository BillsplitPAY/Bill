import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';

export default class ItemPage extends Component{

  render(){
    //const { state, navigate } = this.props.navigation;

    return(
      <View style={styles.itemPage}>

        <ScrollView>
        <TouchableOpacity onPress={() => {console.log(this.props.screenProps.yo)}}>
          <View style ={styles.imageView}><Image style={styles.img} source= {require('../img/BreakfastSandwich.jpg')} /></View>
          </TouchableOpacity>
          <View style ={styles.descView}>
            <Text style={styles.foodTitle}>Blah</Text>
            <Text style={styles.foodDesc}>The greatest sandwich ever invented.</Text>
          </View>

        <View style={styles.breaker}><Text style={styles.breakerText}>Quantity</Text></View>

        <View style={styles.descView}></View>

        <View style={styles.breaker}><Text style={styles.breakerText}>Item Special Selections</Text></View>

        <View style={styles.descView}></View>

        <View style={styles.breaker}><Text style={styles.breakerText}>Requests</Text></View>

        <View style={styles.descView}></View>

        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={() => {this.props.increment}}>
          <Text style={styles.buttonText}>Add To Order</Text>
          <Text style={styles.price}>Blah</Text>
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
