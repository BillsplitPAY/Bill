import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import Breaker from '../../flexComponents/breaker';
import {PriceBreakdown, SplitBreakdown} from '../../flexComponents/priceBreakdown';
import { addUp, listItemCreator } from '../../helperFunctions/pureFunctions';
import Tipper from '../tipper';
import BottomButton, {PayButton, CheckoutButton} from '../../flexComponents/bottomButton'
import {gStyle} from '../../containers/styles';
import {OrderListItem} from '../../flexComponents/listItem'
import OrderDropdown from '../../flexComponents/OrderDropdown'

export default class EvenSplit extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const order = this.props.screenProps.order
    const total = addUp(order).toFixed(2)
    const tax = (addUp(order) * .07).toFixed(2);
    const subtotal = ((addUp(order) * .07) + (addUp(order))).toFixed(2);
    const splitTotal = subtotal / 4;
    const tip = ((this.props.screenProps.tip / 100) * (total / 4)).toFixed(2);

    return(
      <View style={styles.cartPage} blurRadius={1}>
        <ScrollView>
          <View>
          <OrderDropdown order={this.props.screenProps.order} name={'You'}/>

           <Text style={styles.itemHeader}>Your Items</Text>
           {listItemCreator(this.props.screenProps.order, OrderListItem)}
           <Text style={styles.itemHeader}>Rob's Items</Text>
           {listItemCreator(this.props.screenProps.order, OrderListItem)}
           <Text style={styles.itemHeader}>Lee's Items</Text>
           {listItemCreator(this.props.screenProps.order, OrderListItem)}
           <Text style={styles.itemHeader}>Luc's Items</Text>
           {listItemCreator(this.props.screenProps.order, OrderListItem)}
          </View>
      </ScrollView>

      <SplitBreakdown lineOneValue={subtotal}lineTwoValue={tax} subtotal={tax}/>

      <Tipper />

      <PayButton buttonPrice={'$0.00'}/>
      <View style={{height: 80, width: '100%', backgroundColor: '#212121'}}></View>

    </View>
  )
  }

}

const styles = StyleSheet.create({
  cartPage:{justifyContent: 'space-between', height: 870, opacity: 1},

  itemHeader:{textAlign: 'center', fontSize: 14, fontWeight: 'bold', letterSpacing: 5, marginTop: 14},

  payText: {textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}


})
