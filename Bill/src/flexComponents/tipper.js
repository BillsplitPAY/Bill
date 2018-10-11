import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';

const Tipper = (props) => {

function totalAdder(){
  let total = 0;
  for (i = 0; i < props.screenProps.order.length; i++){
    total += props.screenProps.order[i].price
  }
  return total
}

console.log(props.screenProps)

return(
<View style={styles.tipPayContainer}>
   <View style={styles.tipContainer}>
    <View style={styles.tipLine}>
      <TouchableHighlight style={styles.tipButton}><Text style={styles.tipButtonText}>Cash{"\n"} Tip</Text></TouchableHighlight>
      <TouchableHighlight style={[styles.tipButton]} onPress={()=>{props.screenProps.tipDown()}}><Text style={[styles.tipButtonText,  styles.upDownButtons]}>-</Text></TouchableHighlight>
      <View style={styles.tipAmount}>
        <Text>{props.screenProps.tip}%</Text>
        <Text>${props.tip}</Text>
      </View>
      <TouchableHighlight style={[styles.tipButton]} onPress={()=>{props.screenProps.tipUp()}}><Text style={[styles.tipButtonText,  styles.upDownButtons]}>+</Text></TouchableHighlight>
      <TouchableHighlight style={styles.tipButton}><Text style={styles.tipButtonText}>Custom{"\n"} Amount</Text></TouchableHighlight>
    </View>
   </View>
   </View>
 )
 }

 export default Tipper;

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
