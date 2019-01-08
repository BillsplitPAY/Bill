import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';
import {style} from '../styles/styles'
import Breaker from './breaker'
import { Ionicons } from '@expo/vector-icons';
import Item from '../flexComponents/item';


class ItemPage extends Component {
  constructor(props){
    super(props)
    this.state = {quantity: 1}
    this.repeater = this.repeater.bind(this)
  }

  repeater(iteratedThing, navigate, screenProps){
    return iteratedThing.map((item)=>{
      return <Item foodItem={item} category={iteratedThing} navi={navigate} screenProps={screenProps}/>
    })
  }

  render(){
    console.table(this.props)
    const {navigate} = this.props.navigation;
    //category is an object with the category's name under the name property, and the category's items under .entries.items
    const category = this.props.navigation.state.params.other;

    const itemName = this.props.screenProps.currentItem.name;
    const itemDesc = this.props.screenProps.currentItem.desc;
    const itemPrice = this.props.screenProps.currentItem.price;

    return(
      <View style={[style.redBorder, style.page, {justifyContent: 'space-between'}]}>
      <View style={[style.greenBorder, style.row, {height: 200}]}>
        <View style={[style.redBorder, {width: '50%', justifyContent: 'flex-start'}]}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 32,}}>{itemName}</Text>
          <Text style={{fontSize: 15}}>{itemDesc}</Text>
        </View>
        <View style={[style.redBorder, style.row, {alignItems: 'center', justifyContent:'center', width: '50%'}]}>
        <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) - 1)})}}><Ionicons name="ios-remove-circle-outline" size={32} /></TouchableHighlight>
        <TextInput style={styles.textBox} defaultValue={this.state.quantity} autoFocus={false} onChangeText={(payment) => {this.setState({amount: Number(payment)})}}/>
        <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) + 1)})}}><Ionicons name="ios-add-circle-outline" size={32} /></TouchableHighlight>
        </View>
      </View>

      <Breaker value={'Item Options'}/>
      <View style={[style.greenBorder, {height: 200}]}></View>

      <Breaker value={'Similar Items'}/>
      <View style={[style.greenBorder, {height: 200, flexWrap: 'wrap'}]}>

      {this.repeater(this.props.screenProps.category.category, this.props.navigation.navigate, this.props.screenProps)}

        <Item foodItem={this.props.screenProps.category.category[0]} category={this.props.screenProps.category} navi={this.props.navigation.navigate} screenProps={this.props.screenProps}/>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {navigate('Menu'); this.props.screenProps.addItem(this.state.quantity, itemName, (Number(itemPrice) * this.state.quantity), itemDesc); this.props.screenProps.addPrice(Number(itemPrice))}}>
        <Text style={styles.buttonText}>Add To Cart</Text>
        <Text style={styles.price}>${(itemPrice * this.state.quantity).toFixed(2)}</Text>
      </TouchableOpacity>

      </View>
    )
  }

}

export default ItemPage;

const styles = StyleSheet.create({
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
})
