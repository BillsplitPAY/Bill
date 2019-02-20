import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView,
  TouchableHighlight, Image, TouchableOpacity, TextInput, Animated} from 'react-native';
import Breaker from '../flexComponents/breaker';
import {listItemCreator} from '../helperFunctions/pureFunctions';
import BottomButton, {PayButton, CheckoutButton} from '../flexComponents/bottomButton'
import { StackNavigator } from 'react-navigation';
import {gStyle} from '../containers/styles';
import Tipper from '../components/tipper';
import PayOptions from '../components/payOptions';
import {SplitBreakdown, PriceBreakdown} from '../flexComponents/priceBreakdown';
import {OrderListItem} from '../flexComponents/listItem'
import { connect } from 'react-redux'

class OrderDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state={

      dropdown: new Animated.Value(props.startVal),
      text: new Animated.Value(0),
    }
    this.superAnimator=this.superAnimator.bind(this)
  }

  superAnimator(stateValue, duration, toValue1){
      if (stateValue._value === 0){
          return Animated.timing(stateValue, {duration: duration, toValue: toValue1})
      }
      else{
          return Animated.timing(stateValue, {duration: duration, toValue: 0})
          //return Animated.timing(this.state.dropdown, {duration: 200, toValue: 0})
      }
  }

render(){
  console.log(this.props.orderz)
  return(
    <View style={{marginTop: 10, alignItems: 'center'}}>
      <TouchableHighlight onPress={()=>{this.superAnimator(this.state.dropdown, 400, this.props.order.length*50).start()}}style={{borderRadius: 5, borderColor: 'black', borderWidth: .5, width: '99%', height: 40, backgroundColor: '#212121', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
      <View style={{backgroundColor: '#212121', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', width: '100%', height: '100%'}}>
        <Text style={styles.itemHeader}>{this.props.name}</Text>
        <Text style={{color: 'white', fontSize: 14}}>{this.props.order.length} Items</Text>
        <Text style={{color:'green', fontSize: 18, fontWeight: 'bold'}}>$14.50</Text>
        </View>
      </TouchableHighlight>
      <Animated.View style={{height: this.state.dropdown, backgroundColor:'rgb(231,232,236)', zIndex: 2, overflow: 'hidden'}}>{listItemCreator(this.props.order, OrderListItem)}</Animated.View>
    </View>
)

  }

  // componentDidMount(){
  //   this.setState({startVal: this.props.order.length*50})
  //   console.log(this.state.dropdown)
  // }
}

function mapStateToProps(state){
  return {
    order: state.order
  }
}


export default connect(mapStateToProps)(OrderDropdown)



const styles = StyleSheet.create({
  hidden:{position: 'absolute', height:'auto', borderColor: 'black', width: '95%',  left: 10, right: 'auto', top: 500, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between', },

  payOption:{height: 80, width: '25%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRightWidth: .5, borderRightColor: 'black',},

  cartPage:{justifyContent: 'space-between', height: '100%', opacity: 1},

  itemHeader:{fontSize: 20, fontWeight: 'bold', color: 'white'},

  payText: {textAlign:'center', fontSize: 20, fontFamily: gStyle.appFont}


})
