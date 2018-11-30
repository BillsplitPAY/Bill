import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, TouchableHighlight} from 'react-native';
import Breaker from './breaker'
import { addItem, addPrice } from '../src/actions/index.js';
import { Ionicons } from '@expo/vector-icons';
import NoteBox from '../src/flexComponents/noteBox';
import ItemScroller from '../src/flexComponents/itemScroller';

export default class ItemPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: '1'
    }
  }

  decreaseQuantity (quantity) {
    if(quantity === '1') {return}
    quantity = quantity - 1;
    this.setState({quantity: String(Number(quantity)) })
  }

  render(){
    const { navigate } = this.props.navigation;
    const category = this.props.navigation.state.params.other;
    const itemName = this.props.navigation.state.params.screen.name;
    const itemDesc = this.props.navigation.state.params.screen.description;
    const itemPrice = this.props.navigation.state.params.screen.price;
    //console.log(global.window)
    return(
      <View style={styles.itemPage}>
        <ScrollView style={styles.pageContent}>

          <View style ={[styles.foodView, {height:'25%', alignItems: 'center'}]}>

          <View style={[styles.foodInfo, {}]}>
            <Text style={styles.foodTitle}>{itemName}</Text>
            <Text style={styles.foodDesc}>{itemDesc}</Text>
          </View>

          <View style={styles.quantityCounter}>
              <TouchableHighlight onPress={ ()=> this.decreaseQuantity(this.state.quantity) }><Ionicons name="ios-remove-circle-outline" size={32} /></TouchableHighlight>
              <TextInput style={styles.textBox} defaultValue={this.state.quantity} autoFocus={false} onChangeText={(payment) => {this.setState({amount: Number(payment)})}}/>
              <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) + 1)})}}><Ionicons name="ios-add-circle-outline" size={32} /></TouchableHighlight>
          </View>

          </View>

        <Breaker value='Selections' />
        <View style={styles.descView}></View>

        <Breaker value='Notes for the Kitchen'/>
        <View style={styles.descView}>
          <NoteBox />
        </View>

        <View style={styles.otherView} >
        <Text style={styles.otherSuggestionsTitle}>{`Other ${category.name}`}</Text>

          <ScrollView style={styles.relatedItems} horizontal = {true}>
          <ItemScroller category={category} navigation={this.props.navigation}/>
          </ScrollView>
        </View>

        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={() => {navigate('Menu'); this.props.screenProps.addItem(this.state.quantity, itemName, (Number(itemPrice) * this.state.quantity), itemDesc); this.props.screenProps.addPrice(Number(itemPrice))}}>
          <Text style={styles.buttonText}>Add To Cart</Text>
          <Text style={styles.price}>${(this.props.navigation.state.params.screen.price * this.state.quantity).toFixed(2)}</Text>
        </TouchableOpacity>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  itemPage:{
    justifyContent: 'flex-end',
    height: '100%',
    backgroundColor: 'white',
  },
  pageContent:{
    marginTop: 10,
  },
  imageView: {
    height: 212,
    //borderColor: 'black',
    //borderWidth: 1,
    backgroundColor:'grey',
  },
  img:{
    position: 'relative',
    flexShrink:1,
    width: '100%',

  },
  foodView:{
    height: 110,
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'white',
    justifyContent: 'space-around',
    flexDirection: 'row',
    justifyContent:'flex-start',
    width: '100%',
  },
  descView:{
    height: 130,
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'white',
    justifyContent: 'space-around',
    width: '100%',

  },
  foodInfo:{
    flexWrap: 'wrap',
    width: '60%'
  },
  foodTitle:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 12,
  },
  foodDesc:{
    marginLeft: 12,
    flexWrap: 'wrap',
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
   price:{
     //alignSelf: 'flex-end',
     color: '#8bc34a',
     fontWeight:'bold',
     marginRight: 4,
     fontSize: 17,
   },
   textBox:{
     backgroundColor: '#ececec',
     borderWidth: 2,
     borderColor: 'black',
     width: '20%',
     height: '40%',
     alignSelf: 'center',
     borderRadius: 5,
     textAlign: 'center',
     fontSize: 20,
     marginLeft: 8,
     marginRight: 8,
   },
   quantityCounter:{
     flexDirection: 'row',
     alignSelf: 'center',
     height: '100%',
     alignItems: 'center',
     marginLeft: 20,
     marginBottom: 20,
   },
   relatedItems:{
    height: '100%',
    marginTop: 4,
  },
  otherSuggestionsTitle:{
    fontWeight:'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  otherView:{
    height: 130,
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'#f1f4f7',
    justifyContent: 'space-around',
    width: '100%',
    //borderTopWidth: 1,
    borderTopColor: 'black',
  },

})
