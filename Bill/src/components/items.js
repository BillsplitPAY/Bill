import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import Breaker from './breaker';
import Item from '../flexComponents/item';

class Items extends Component {
  constructor(props){
    super(props);
    this.categoryBuilder = this.categoryBuilder.bind(this);
    //this.itemBuilder = this.itemBuilder.bind(this);
  }
  static navigationOptions: {
   title: 'Cart',
  // headerStyle:{backgroundColor: '#212121', borderBottomWidth: 0},
   headerTintColor: 'white'
};

  categoryBuilder(array, navigate, other){
    return array.map(function(category){
      return (
        <View style={{backgroundColor: '#edeef0'}}>
          <Breaker value={category.name} />

        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'flex-start', backgroundColor: '#edeef0',  margin: '1.8%'}}>
          {category.entries.items.map(function(categoryItem){
            return(
              <Item setCategory={other} foodItem={categoryItem} navi={navigate} category={category}/>
          )
        })}
        </View>
        </View>
      )
    })
  }

//____________________________________________________________________________________________

  render(){
    console.log(this.props)
    return(
      <View style={styles.unnecessary}>
        {this.categoryBuilder(this.props.categories, this.props.navigate, this.props.setCategory)}
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
      width: '48%',
      backgroundColor: '#e8e4e4',
      //alignSelf: 'center',
      marginBottom: 8,
    },
    innerTouch:{

    },
    itemz: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      width: 'auto',
      height: 'auto',
      borderColor: 'rgba(114, 137, 143, 0.29)',

    },
    textBox:{
      flexDirection: 'column',
      flexShrink: 2,
      justifyContent: 'space-around',
      height: 'auto'
    },
    foodName:{
      fontSize: 15,
      fontFamily: 'Avenir',
      color: 'black',
    },
    foodDescription:{
      fontSize: 17,
      color: 'black',
    },
    foodPrice:{
      color: 'green',

      fontSize: 13,
      textAlign: 'right',
      fontFamily: 'Futura',
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
