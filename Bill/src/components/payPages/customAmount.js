import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';
import Breaker from '../../flexComponents/breaker';
import BottomButton from '../../flexComponents/bottomButton';
import PriceBreakdown from '../../flexComponents/priceBreakdown';
import { addUp, listItemCreator } from '../../helperFunctions/pureFunctions';

export default class EvenSplit extends Component{
  constructor(props){
    super(props);
    this.state = {amount: ((addUp(this.props.screenProps.order) * .07) + (addUp(this.props.screenProps.order))).toFixed(2)}
  }

  render(){
    const order = this.props.screenProps.order
    const total = addUp(order).toFixed(2)
    const tax = (addUp(order) * .07).toFixed(2);
    const subtotal = ((addUp(order) * .07) + (addUp(order))).toFixed(2);
    const tip = ((this.props.screenProps.tip / 100) * (this.state.amount)).toFixed(2);
    const payAmount= (Number(this.state.amount) + Number(tip)).toFixed(2)

    return(
      <View style={styles.payPage}>
        <View>
          <Breaker value='Order Breakdown' />
          <View style={styles.descView}>
              {listItemCreator(order)}
          </View>
          <PriceBreakdown lineOneText={'Group Total'} lineTwoText={'Group Tax'} lineThreeText={'Group Subtotal'} lineFourText={'Your Subtotal'} lineOne={total} lineTwo={tax} lineThree={subtotal} lineFour={subtotal}/>
          <View style={styles.customDiv}>
              <Text style={styles.customText}>How Much Would You Like to Pay?</Text>
              <TextInput style={styles.textBox} autoFocus={true} onChangeText={(payment) => {this.setState({amount: Number(payment)})}}/>
          </View>

          <Tipper screenProps={this.props.screenProps} tip={tip}/>
          <BottomButton navigate={this.props.navigation.navigate} buttonText={`Pay $ ${payAmount}`}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  customDiv:{ flexDirection: 'row', marginTop: 20, marginBottom: 20, justifyContent: 'center', },
  customText:{ fontSize: 20, flexWrap: 'wrap', width: '50%' },
  textBox:{ height: 55, width: '40%', borderColor: 'grey', borderWidth: 5, borderRadius: 10, color: 'grey', backgroundColor: 'white', fontSize: 20, color: 'black', paddingLeft: 10, },
})
