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

  static navigationOptions:{
   title: 'Cart',
   headerTintColor: 'white',
}

//takes an object, iterates over it's keys, and creates a breaker

//you need a function that iterates over something and uses it to render multiple repeat components with different values.

// blah(component, iteratedThing){
//   if (typeof iteratedThing === 'object'){
//     Object.values(iteratedThing).map( (property) => {
//         return component
//     })
//
//   }
//   if (typeof iteratedThing === 'array'){
//     iteratedThing.map(function(item){return <Item foodItem={item} category={category} navi={navigate} screenProps={screenProps}/>
//   }
//   else{
//     return'this is neither an array nor an object, bruh.'
//   }
// }




categoryBuilder(obj, navigate, setItem, setCat, screenProps){
  return Object.values(obj).map(category => {
    return(
    <View style={{backgroundColor: '#edeef0'}}>
      <Breaker value={category[0].category} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'flex-start', backgroundColor: '#edeef0',  margin: '1.8%'}}>
      {category.map(function(item){return <Item foodItem={item} category={category} navi={navigate} screenProps={screenProps}/>})}
      </View>
    </View>
  )
})
}


  render(){
    console.log(this.props)
    return(
      <View style={styles.unnecessary}>
        {this.categoryBuilder(this.props.menu, this.props.navigate, this.props.setCurrentItem, this.props.setCategory, this.props.screenProps)}
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
