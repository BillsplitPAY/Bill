import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default class ItemsTest extends Component {
  constructor(props){
  super(props);
}

createItem(thing){
  return(
    <View style = {styles.item}>
     <View style={styles.textBox}>
      <Text style={styles.foodName}>{thing.dish.name}</Text>
      <Text style={styles.foodDescription}>Blahhhhhh</Text>
      <Text style={styles.foodPrice}>{thing.dish.price}</Text>
    </View>
    <View><Image style={styles.img} source={require('../img/BreakfastSandwich.jpg')}/></View>
    </View>
  )
}
//This function returns the component that you want each time, with differences based on changes to the props

createItems(propy){
  return propy.map(this.createItem);
}
//This function maps over your data object and calls createItem on each (which creates a component with data from each property)

render(){
  return (
    <View>{this.createItems(this.props.item.dishes)}</View>
  )


}
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
    },
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
  })
