import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput} from 'react-native';

export default class EvenSplit extends Component{
  constructor(props){
    super(props);
    this.funky2 = this.funky2.bind(this);
    this.orderArrayMapper = this.orderArrayMapper.bind(this);
    this.orderListCreator = this.orderListCreator.bind(this);
    this.totalAdder = this.totalAdder.bind(this);
  }

  orderListCreator(foodItemObject){
    if (this.props.screenProps.order.length === 0){
      return 'getting order'
    }
    return(
      <View style={styles.inDesc}>
        <Text style={styles.descItems}>'1X'</Text>
        <Text style={styles.descText}>{foodItemObject.name}</Text>
        <Text style={styles.descPrice}>${foodItemObject.price.toFixed(2)}</Text>
      </View>
    )
  }

  orderArrayMapper(orderArray, func){
    return orderArray.map(func)
  }

  totalAdder(){
    let total = 0;
    for (i = 0; i < this.props.screenProps.order.length; i++){
      total += this.props.screenProps.order[i].price
    }
    return total
  }

  funky2(x){
    let total = 0;
    for (let i = 0; i < x.length; i++){
        let num = Number(x[i].price)
        total += num;
    }
    return total
  }

  render(){
    return(
      <View>
      <View style={styles.descView}>
        {this.orderArrayMapper(this.props.screenProps.order, this.orderListCreator)}
      </View>
      <View>

      </View>
         <View style={styles.priceView}>
           <View style={styles.inDesc}>
             <Text>Table Subtotal</Text>
             <Text>${this.totalAdder().toFixed(2)}</Text>
           </View>
           <View style={styles.inDesc}>
             <Text>Tax</Text>
             <Text>${(this.totalAdder() * .07).toFixed(2)}</Text>
           </View>
           <View style={styles.inDesc}>
             <Text>Table Total</Text>
             <Text>${((this.totalAdder() * .07) + (this.totalAdder())).toFixed(2)}</Text>
           </View>
           <View style={styles.inDesc}>
             <Text>Total Split 4 Ways</Text>
             <Text>${((((this.totalAdder() * .07) + (this.totalAdder())).toFixed(2)) / 4).toFixed(2)}</Text>
           </View>
         </View>
         <View style={styles.yourShare}>
            <Text style={styles.yourShareText}>Your Share</Text>
            <Text style={styles.yourShareText}>${((((this.totalAdder() * .07) + (this.totalAdder())).toFixed(2)) / 4).toFixed(2)}</Text>
          </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  priceView:{
    height: 'auto',
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'white',
    justifyContent: 'space-between',
    flexGrow: 1,
    width: '100%',
    marginBottom: 100,
  },
  inDesc:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    //marginBottom: 20,
  },
  yourShare: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    fontSize: 100,
  },
  yourShareText: {
    fontSize: 60,
  },
  descText:{
    marginLeft: 15,
    //width: 220,
    flexGrow: 2,
    //width: 200,
  },
  descItems:{
    //marginLeft: 15,
    flexShrink: 2,
    //width: 200,
  },
  descPrice:{
    //marginLeft: 50,
  },



})
