import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import Breaker from './breaker';
import Tipper from '../src/flexComponents/tipper';
import BottomButton from '../src/flexComponents/bottomButton';
import PriceBreakdown from '../src/flexComponents/priceBreakdown';
import { addUp, itemListCreator } from '../src/helperFunctions/pureFunctions';

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
      <View style={styles.payPage}>
        <View>
          <Breaker value='Total Order' />
          <View style={styles.descView}>
              {itemListCreator(order)}
          </View>
          <PriceBreakdown lineOneText={'Group Total'} lineTwoText={'Group Tax'} lineThreeText={'Group Subtotal'} lineFourText={'Your Subtotal (Split 4 Ways)'} lineOne={total} lineTwo={tax} lineThree={subtotal} lineFour={(subtotal / 4).toFixed(2)}/>
          <Tipper screenProps={this.props.screenProps} tip={tip}/>
          <BottomButton navigate={this.props.navigation.navigate} buttonText={`Pay $ ${tip}`}/>
        </View>
      </View>

    )
  }

}

const styles = StyleSheet.create({


})
