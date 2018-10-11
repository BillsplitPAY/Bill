import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import Breaker from './breaker';


class Items extends Component {
  constructor(props){
    super(props);
    this.categoryMapper = this.categoryMapper.bind(this);
    this.breakerMaker = this.breakerMaker.bind(this);
    this.itemMaker = this.itemMaker.bind(this);
    this.itemMapper = this.itemMapper.bind(this);
  }

//_____________________________________________________________________________________________

itemMaker(foodItem){
  return (
    <View>
    <TouchableHighlight style={styles.touch} onPress={() => {this.props.navi('ItemPage', { screen: foodItem })}}>
          <View style={styles.itemz}>
           <View style={styles.textBox}>
              <Text style={styles.foodName}>{foodItem.name}</Text>
              <Text style={styles.foodDescription}>{foodItem.description}</Text>
              <Text style={styles.foodPrice}>${foodItem.price}</Text>
            </View>

          </View>
        </TouchableHighlight>
    </View>
  )
}

itemMapper(foodItems){
  return foodItems.map(this.itemMaker);
}

breakerMaker(categoryObj){
  return (
    <View>
      <Breaker value={categoryObj.name}/>
      {this.itemMapper(categoryObj.entries.items)}
    </View>
  )
};

  categoryMapper(categoriesArray){
    return categoriesArray.map(this.breakerMaker);
  }

//____________________________________________________________________________________________

  render(){
    return (
      <View style={styles.unnecessary}>
        {this.categoryMapper(this.props.categories)}
      </View>
    )
}

}
export default Items;
//____________________________________________________________________________________________
  const styles = StyleSheet.create({
    // div surrounding all items
    unnecessary:{
      width: 'auto',
      height: 'auto',
    },
    touch:{
      width: 'auto',
      height: 'auto',
      backgroundColor: '#303030'
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
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Avenir',
      color: 'white',
    },
    foodDescription:{
      fontSize: 17,
      color: 'white',
    },
    foodPrice:{
      color: 'green',
      fontWeight: 'bold',
      fontSize: 14,
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
    breaker:{
      height: 25,
      backgroundColor: 'rgb(114, 137, 143)',
      justifyContent: 'center',
    },
    breakerText:{
      color: 'rgb(25, 52, 65)',
      marginLeft: 12,

    },
  })
