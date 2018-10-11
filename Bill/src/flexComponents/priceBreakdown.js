import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';

const PriceBreakdown = (props) => {
  return (
    <View style={styles.priceView}>

      <View style={styles.inDesc}>
        <Text>{props.lineOneText}</Text>
        <Text>${props.lineOne}</Text>
      </View>

      <View style={styles.inDesc}>
        <Text>{props.lineTwoText}</Text>
        <Text>${props.lineTwo}</Text>
      </View>

      <View style={styles.inDesc}>
        <Text>{props.lineThreeText}</Text>
        <Text>${props.lineThree}</Text>
      </View>

      <View style={styles.inDesc}>
        <Text>{props.lineFourText}</Text>
        <Text>${props.lineFour}</Text>
      </View>

    </View>
  )

}

export default PriceBreakdown;

const styles = StyleSheet.create({
  payPage:{
    height: '100%',
  },
  priceView:{
    height: 'auto',
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'white',
    justifyContent: 'space-between',
    flexGrow: 1,
    //width: '100%',
    margin: 10,
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
  yourShare: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    fontSize: 100,
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
  tipPayContainer:{
    flexDirection: 'column',
    justifyContent: 'flex-end',
    //borderColor: 'black',
    //borderWidth: 1,
    flexGrow: 1,
  },
  tipContainer:{
    backgroundColor: 'white',
  },
  tipAmount:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tipLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    //width: '100%'
  },
  tipButton:{
    width: 'auto',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upDownButtons:{
    fontSize: 40
  },
  tipButtonText:{
    flexWrap: 'wrap',
    padding: 15,
  },
  payButton:{
    height: 50,
    flexDirection: 'row',
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'green',
    justifyContent: 'space-around',
    margin: 10,
    alignItems: 'center',
  },
  yourShareText: {
    fontSize: 20,
    color: 'white',
  },



})
