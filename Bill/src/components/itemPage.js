import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';
import {gStyle} from '../containers/styles'
import Breaker from '../flexComponents/breaker'
import { Ionicons } from '@expo/vector-icons';
import Item from '../flexComponents/item';
import BottomButton from '../flexComponents/bottomButton';

class ItemPage extends Component {
  constructor(props){
    super(props)
    this.state = {quantity: 1}
    this.repeater = this.repeater.bind(this)
  }

  repeater(array, navigate, screenProps){
    return array.map((item)=>{
      return <Item key={item.name} foodItem={item} category={array} navi={navigate} screenProps={screenProps}/>
    })
  }

  render(){
    //console.table(this.props)
    const {navigate} = this.props.navigation;
    //category is an object with the category's name under the name property, and the category's items under .entries.items
    const itemName = this.props.screenProps.currentItem.name;
    const itemDesc = this.props.screenProps.currentItem.desc;
    const itemPrice = this.props.screenProps.currentItem.price;

    return(
      <View style={[gStyle.page, styles.topDiv]}>

        <View style={[gStyle.row, styles.itemAndCounterRow]}>
          <View style={styles.itemDiv}>
            <Text style={styles.itemName}>{itemName}</Text>
            <Text style={styles.itemDescription}>{itemDesc}</Text>
          </View>
        <View style={[gStyle.row, styles.counterDiv]}>
          <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) - 1)})}}><Ionicons name="ios-remove-circle-outline" size={32} /></TouchableHighlight>
          <TextInput style={styles.textBox} defaultValue={String(this.state.quantity)} autoFocus={false}/>
          <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) + 1)})}}><Ionicons name="ios-add-circle-outline" size={32} /></TouchableHighlight>
        </View>
      </View>

      <Breaker value={'Item Options'}/>
      <View style={{height: 'auto'}}></View>

      <Breaker value={'Similar Items'}/>
      <View style={styles.similarDiv}>
        {this.repeater(this.props.screenProps.category.category, this.props.navigation.navigate, this.props.screenProps)}
      </View>

      <BottomButton buttonText={'Add to Cart'} buttonPrice={(itemPrice * this.state.quantity).toFixed(2)} doThis={() => {navigate('Menu'); for(let i = 0; i < this.state.quantity; i++){this.props.screenProps.addItem((this.props.screenProps.currentItem))}; this.props.screenProps.addPrice(Number(itemPrice))}}/>

      </View>
    )
  }

}

export default ItemPage;

const styles = StyleSheet.create({

topDiv:{ justifyContent: 'space-between', },

itemAndCounterRow:{ height: 200, },

itemDiv:{ width: '50%', justifyContent: 'flex-start', paddingLeft: 10, },

itemName:{ fontSize: 20, fontWeight: 'bold', marginTop: 32, marginBottom: 8, },

itemDescription:{ fontSize: 15 },

counterDiv: { alignItems: 'center', justifyContent:'center', width: '50%' },

similarDiv:{ height: 200, flexWrap: 'wrap', justifyContent: 'space-around' },

button:{ flexDirection: 'row', backgroundColor: 'black', height: 45, width: '99%', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginBottom: 2, borderRadius: 5, },

buttonText:{ color: 'white', fontWeight:'bold', marginLeft: '37%', fontSize: 17, },



textBox:{ backgroundColor: 'white', borderWidth: 2, borderColor: 'black', width: '20%', height: '40%', alignSelf: 'center', borderRadius: 5, textAlign: 'center', fontSize: 20, marginLeft: 8, marginRight: 8, },
})
