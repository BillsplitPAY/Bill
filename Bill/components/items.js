import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';


class Items extends Component {
  constructor(props){
    super(props);
    this.createItem = this.createItem.bind(this);
    //this.state={current: ''}
  }

  createItem(thing){
    return(
      <TouchableHighlight style={styles.touch} onPress={() => {this.props.navi('ScreenThree', { screen: thing.dish })}}>
        <View style={styles.itemz}>
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
export default Items;

  const styles = StyleSheet.create({
    // div surrounding all items
    unnecessary:{
      width: 'auto',
      height: 'auto',
    },
    touch:{
      width: 'auto',
      height: 'auto'
    },
    itemz: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      width: 'auto',
      height: 100,
      borderColor: 'rgba(114, 137, 143, 0.29)',
      borderWidth: .25,
    },
    textBox:{
      flexDirection: 'column',
      flexShrink: 2,
      justifyContent: 'space-around',
      height: 'auto'
    },
    foodName:{
      fontSize: 12,
      fontWeight: 'bold',
    },
    foodDescription:{
      fontSize: 12,
    },
    foodPrice:{
      color: 'green',
      fontWeight: 'bold',
      fontSize: 12,
    },
    imgBox:{
      height: 75,
      width: 75,
      marginRight: 5,
      marginTop: 5,
      marginLeft: 5,
    },
    img:{
      height: 75,
      width: 75,
    },
  })
