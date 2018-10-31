import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import Breaker from './breaker';

class Items extends Component {
  constructor(props){
    super(props);
    this.breakerBuilder = this.breakerBuilder.bind(this);
    //this.itemBuilder = this.itemBuilder.bind(this);
  }


  breakerBuilder(categoriesArray, navigate){
    return categoriesArray.map(function(index){
      return (
        <View style={{backgroundColor: '#edeef0'}}>
          <View style={{height: 'auto', marginTop: 3, backgroundColor: '#212121', borderColor: 'black', borderWidth: 1}}>
            <Text style={{textAlign: 'left', marginLeft: '5%', color: 'white', fontSize: 14, fontFamily: 'Futura'}}>{index.name}</Text>
          </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'flex-start', backgroundColor: '#edeef0',  margin: '1.8%'}}>


        {index.entries.items.map(function(categoryItem){
          return(
            <View style={styles.touch, {flexDirection: 'row', width: '48%', height: 'auto', marginRight: '2%'}} >
                <TouchableHighlight onPress={() => {navigate('ItemPage', { screen: categoryItem, other: index, navi: navigate})}} style={styles.innerTouch, {width: '100%', flexDirection: 'row',  justifyContent: 'space-between', alignSelf: 'center', borderColor: '#dad9e2', borderWidth: .5, marginBottom: 2}}>
                <View style={{height: '100%', width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 2, backgroundColor: 'white', shadowOffset:{  width: 4,  height: 8,  }, shadowColor: 'grey', shadowOpacity: .75, borderRadius: 3.5, padding: 5}}>
                      <Text style={[styles.foodName, {width: '83%', fontFamily: 'Futura',}]}>{categoryItem.name}</Text>
                      <Text style={[styles.foodPrice, {width: '17%', alignSelf: 'flex-end'}]}>${Number(categoryItem.price).toFixed(0)}</Text>

                    </View>
                    </TouchableHighlight>
              </View>

          )
        })}
        </View>
        </View>
      )
    })
  }



//____________________________________________________________________________________________

  render(){
    return (
      <View style={styles.unnecessary} ref={view => { this.myComponent = view; }}>
        {this.breakerBuilder(this.props.categories, this.props.navi)}
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
