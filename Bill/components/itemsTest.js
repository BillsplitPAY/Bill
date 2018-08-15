import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';


class ItemsTest extends Component {

  constructor(props){
    super(props);
    this.createItem = this.createItem.bind(this);
    this.state={current: ''}
  }

  createItem(thing){
    return(
      <TouchableHighlight style={styles.touch} onPress={() => {this.props.navi('ScreenThree', {screen: thing.dish})}}>
      <View styles={styles.item}>

         <View style={styles.textBox}>
            <Text style={styles.foodName}>{thing.dish.name}</Text>
            <Text style={styles.foodDescription}>Blahhhhhh</Text>
            <Text style={styles.foodPrice}>{thing.dish.price}</Text>
          </View>

          <View style={styles.imgBox}>
            <Image style={styles.img} source={require('../img/BreakfastSandwich.jpg')}/>
          </View>

      </View>
      </TouchableHighlight>

    )
}
//This function returns the component that you want each time, with differences based on changes to the props

  createItems(propy){
  return propy.map(this.createItem);
}
//This function maps over your data object and calls createItem on each (which creates a component with data from each property)

  render(){
  return (
    <View style={styles.unnecessary}>
      {this.createItems(this.props.item.dishes)}
    </View>
  )
}

}
export default ItemsTest;

  const styles = StyleSheet.create({
    unnecessary:{
      width: 375,
      height: 'auto',
    },
    touch:{
      width: 375,
      //flexDirection:'row',
      //backgroundColor:'red',
      borderColor:'black',
      borderWidth:1,
    },
    item: {
      flexDirection: 'row',
      backgroundColor: 'green',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      width: 375,
      height: 50,
      borderColor: 'green',
      borderWidth: 5,

    },
    textBox:{
      flexDirection: 'column',
      flexShrink: 2,
      justifyContent: 'space-around',
      backgroundColor: 'blue',
      width: '50%',
      height: 'auto'
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
    imgBox:{
      height: 75,
      width: 75,
    },
    img:{
      height: 75,
      width: 75,
      //marginRight: 5,
      //marginTop: 5,
      //marginLeft: 5,
    },

  })
