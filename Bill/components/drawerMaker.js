import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';

const drawerMaker = () => {
  return <View style = {styles.item}>

    <View style={styles.textBox}>
      <Text style={styles.foodName}>Chicken Sandwich</Text>
      <Text style={styles.foodDescription}>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </Text>
      <Text style={styles.foodPrice}>$300</Text>
    </View>

    <View><Image style={styles.img} source={require('../img/qrCode2.png')}/></View>

  </View>
}

  const styles = StyleSheet.create({
    shirt:{
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      //backgroundColor: 'yellow',
      //borderBottomWidth: 1,
      //borderBottomColor: '#0e0a0ab8',
      //flexGrow: 1,
      //textAlign: 'center',
    }
  })
