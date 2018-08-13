import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, FlatList, Image, } from 'react-native';
import { List, ListItem } from "react-native-elements";

export default class Items extends Component {



  /*function itemMaker(){
    return <View style = {styles.item}>

      <View style={styles.textBox}>
        <Text style={styles.foodName}>{Data}</Text>
        <Text style={styles.foodDescription}>{Data}</Text>
        <Text style={styles.foodPrice}>{Data}</Text>
      </View>
      <View><Image style={styles.img} source={Data}/></View>
    </View>
  }

    function itemPlacer(){
      return data.items.map(this.itemMaker)
    }*/

  render() {
    return (

      <View>
        <View style = {styles.item}>

          <View style={styles.textBox}>
            <Text style={styles.foodName}>{this.props.itemName}</Text>
            <Text style={styles.foodDescription}>Data Data Wah Data Data Data Data Data Data Data Data Data </Text>
            <Text style={styles.foodPrice}>{this.props.itemPrice}</Text>
          </View>

          <View><Image style={styles.img} source={require('../img/qrCode2.png')}/></View>

        </View>
      </View>
    );
  }


}


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: 100,
    width: 'auto',
    borderColor: 'rgb(218, 212, 212)',
    borderWidth: .25,
  },
  textBox:{
    flexDirection: 'column',
    flexShrink: 2,
    justifyContent: 'space-around',
  },
  foodName:{
    fontSize: 15,
    fontWeight: 'bold',
  },
  foodDescription:{

  },
  foodPrice:{
    color: 'green',
    fontWeight: 'bold',
  },

  img:{
    height: 75,
    width: 75,
    marginRight: 5,
    marginTop: 5,
    marginLeft: 50,
  }
});
