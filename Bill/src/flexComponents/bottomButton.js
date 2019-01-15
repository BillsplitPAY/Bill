import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';


const BottomButton = (props) => {

  return (
    <View>
    <TouchableOpacity style={styles.button} onPress={()=>{props.doThis()}}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
      <Text style={styles.buttonPrice}>${props.buttonPrice}</Text>
    </TouchableOpacity>
    </View>
  )
}
export default BottomButton




const styles = StyleSheet.create({

  button:{
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 45,
    width: '99%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 2,
    borderRadius: 5,
  },
   buttonText:{
     color: 'white',
     fontWeight:'bold',
     marginLeft: '37%',
     fontSize: 17,
   },
   buttonPrice:{
     //alignSelf: 'flex-end',
     color: '#8bc34a',
     fontWeight:'bold',
     marginRight: 4,
     fontSize: 17,
   },

})
