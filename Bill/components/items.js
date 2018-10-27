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

//_____________________________________________________________________________________________

// itemBuilder(categoryItem){
//   return(
//     <TouchableHighlight style={styles.touch} onPress={() => {this.props.navigation.navigate('ItemPage', { screen: categoryItem })}}>
//           <View style={styles.itemz}>
//            <View style={styles.textBox}>
//               <Text style={styles.foodName}>{categoryItem.name}</Text>
//               <Text style={styles.foodDescription}>{categoryItem.description}</Text>
//               <Text style={styles.foodPrice}>${categoryItem.price}</Text>
//             </View>
//           </View>
//         </TouchableHighlight>
//
//   )
// }

  breakerBuilder(categoriesArray, navigate){
    return categoriesArray.map(function(index){
      return (
        <View>
        <Breaker value={index.name} />
        {index.entries.items.map(function(categoryItem){
          return(
            <TouchableHighlight style={styles.touch} onPress={() => {navigate('ItemPage', { screen: categoryItem, other: index, navi: navigate})}}>
                  <View style={styles.itemz}>
                   <View style={styles.textBox}>
                      <Text style={styles.foodName}>{categoryItem.name}</Text>
                      <Text style={styles.foodDescription}>{categoryItem.description}</Text>
                      <Text style={styles.foodPrice}>${categoryItem.price}</Text>
                    </View>
                  </View>
                </TouchableHighlight>

          )
        })}
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
