import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TextInput} from 'react-native';
import {gStyle} from '../containers/styles'
import Breaker from '../flexComponents/breaker'
import { Ionicons } from '@expo/vector-icons';
import Item from '../flexComponents/item';
import BottomButton from '../flexComponents/bottomButton';
import NoteBox from '../flexComponents/noteBox'

class ItemPage extends Component {
  constructor(props){
    super(props)
    this.state = {quantity: 1}
    this.repeater = this.repeater.bind(this)
    this.options = this.options.bind(this)
  }

  repeater(array, navigate, screenProps){
    return array.map((item)=>{
      return (
      <TouchableHighlight onPress={()=>{this.props.screenProps.setCurrentItem(item); this.props.screenProps.setCategory(item.category); this.props.navigation.navigate('ItemPage')}} key={item.name} style={{borderColor: '#212121', borderWidth:1, borderRadius: 10, height: 170, width: 170, margin: 5, justifyContent:'flex-start',  paddingTop: 5, paddingBottom:20, overflow:'hidden'}}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:5, paddingRight:5, }}>
          <Text style={{fontWeight: 'bold', width: '80%', fontSize:18, flexWrap: 'wrap'}}>{item.name}</Text>
          <Text style={{color: 'green', width: '30%', fontWeight: 'bold', fontSize:18}}>${item.price}</Text>
        </View>
        <View style={{margin: 5, overflow: 'hidden', height:'auto'}}><Text style={{color: 'black', paddingLeft: 5}}>{item.desc}</Text></View>
        </View>
      </TouchableHighlight>
    )
    })
  }

// <Item key={item.name} foodItem={item} category={array} navi={navigate} screenProps={screenProps}/>
  options(){
    if (this.props.screenProps.currentItem.options.length !== 0){
      return(
        <View><Breaker value={'Item Options'}/><View style={{height: 'auto'}}></View></View>
      )
    }
  }


  render(){
    console.log(this.props)
    const {navigate} = this.props.navigation;
    //category is an object with the category's name under the name property, and the category's items under .entries.items
    const currentItem = this.props.screenProps.currentItem;
    const itemName = this.props.screenProps.currentItem.name;
    const itemDesc = this.props.screenProps.currentItem.desc;
    const itemPrice = this.props.screenProps.currentItem.price;

    return(
      <View style={[gStyle.page, styles.topDiv]}>
        <View style={[gStyle.row, styles.itemAndCounterRow]}>
          <View style={styles.itemDiv}>
            <Text style={styles.itemName}>{itemName}</Text>
          </View>
          <View style={[gStyle.row, styles.counterDiv]}>
            <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) + 1)})}}><Ionicons name="ios-add-circle" size={40} /></TouchableHighlight>
            <TextInput style={styles.textBox} defaultValue={String(this.state.quantity)} autoFocus={false}/>
            <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) - 1)})}}><Ionicons name="ios-remove-circle" size={40} /></TouchableHighlight>
          </View>
        </View>
        <Text style={styles.itemDescription}>{itemDesc}</Text>
        <View style={{marginBottom: 20}}><NoteBox defaultValue={`Special requests...`}/></View>
        {this.options()}
        <Breaker value={'Similar Items'}/>
        <ScrollView horizontal={true} contentContainerStyle={[styles.similarDiv, {height: 160}]}>
          {this.repeater(this.props.screenProps.menu[currentItem.category], this.props.navigation.navigate, this.props.screenProps)}
        </ScrollView>
        <BottomButton buttonText={'Add to Cart'} buttonPrice={(itemPrice * this.state.quantity).toFixed(2)} doThis={() => {navigate('Menu'); for(let i = 0; i < this.state.quantity; i++){this.props.screenProps.addItem((this.props.screenProps.currentItem))}; this.props.screenProps.addPrice(Number(itemPrice))}}/>
      </View>
    )
  }

}

export default ItemPage;

const styles = StyleSheet.create({

topDiv:{ justifyContent: 'space-between', },

itemAndCounterRow:{ height: 'auto', marginTop: 13, },

itemDiv:{ width: '80%', justifyContent: 'center', paddingLeft: 10, },

itemName:{ fontSize: 30, fontWeight: 'bold',  fontFamily: 'Futura'},

itemDescription:{ fontSize: 20, width: '100%', paddingLeft: 8, paddingRight: 8, marginBottom: 20, marginTop: 5, fontFamily: 'Futura', },

counterDiv: { alignItems: 'center', justifyContent:'center', width: '20%', flexDirection: 'column' },

similarDiv:{ height: 'auto',   flexDirection: 'row', alignItems: 'center',  marginTop: 20},

button:{ flexDirection: 'row', backgroundColor: 'black', height: 45, width: '99%', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginBottom: 2, borderRadius: 5, },

buttonText:{ color: 'white', fontWeight:'bold', marginLeft: '37%', fontSize: 17, },

textBox:{ width: 40, height: 40, alignSelf: 'center', borderRadius: 5, textAlign: 'center', fontSize: 30, marginLeft: 8, marginRight: 8, },
})
