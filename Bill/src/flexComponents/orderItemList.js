import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker, Animated, TouchableWithoutFeedback} from 'react-native';
import {stateToggler} from '../helperFunctions/pureFunctions';
import {gStyle} from '../styles/styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


class OrderItemList extends Component {
  constructor(props){
    super(props)
    //1. create an animated value
    this.state = {edit: new Animated.Value(0)}
    this.animator = this.animator.bind(this)
  }

  //2. write a function that changes the animated value
  animator(){
      if (this.state.edit._value === 0){
          return Animated.timing(this.state.edit, {duration: 200, toValue: 95})
      }
      else{
          return Animated.timing(this.state.edit, {duration: 200, toValue: 0})
      }
  }

  borderAnimator(){
      if (this.state.edit._value === 0){
          return Animated.timing(this.state.edit, {duration: 200, toValue: 3})
      }
      else{
          return Animated.timing(this.state.edit, {duration: 200, toValue: 0})
      }
  }

  render(){
    //3. Add Animated.View component with the css property you want animated paired with animated value
    //4.Call the function with .start() on a component that contains your animated.view Component
    console.log(this.props)
    return (
      <TouchableOpacity style={styles.inDesc} onPress={()=>{this.borderAnimator().start()}}>
        <Animated.View style = {{height: '100%', width: '100%', borderWidth: this.state.edit, borderColor:'black', flexDirection: 'row'}}>

          <View style={styles.touch}>
            <Text style={styles.descItems, {fontWeight: 'bold'}}>{this.props.itemAmount}</Text>
            <Text style={styles.descText, {fontStyle: 'italic'}}>{this.props.itemName}</Text>
            <Text style={styles.descPrice, {fontWeight: 'bold'}}>${this.props.itemPrice}</Text>
          </View>

          </Animated.View>
        </TouchableOpacity>

    )
  }

}

function mapStateToProps(state){
  return {
    menu: state.menu,
    cart: state.cart,
    price: state.price,
    order: state.order,
    tip: state.tip,
    category: state.category,
    newMenu: state.newMenu,
    currentItem: state.currentItem,
    user: state.user,
  }
}

export default connect(mapStateToProps)(OrderItemList)





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
    borderBottomWidth: .5,
    borderBottomColor: 'black',
    flexDirection: 'row',
    marginTop: 8,
    width: '95%',
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
  },
  touch:{
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
  },
  descText:{
    marginLeft: 15,
    fontSize: 17,
    //width: 220,
    flexGrow: 2,
    //width: 200,
  },
  descItems:{
    //marginLeft: 15,
    flexShrink: 2,
    fontSize: 17,
    //width: 200,
  },
  descPrice:{
    //marginLeft: 50,
    fontSize: 17,
  },
  breaker:{
    height: 25,
    backgroundColor: 'rgb(114, 137, 143)',
    justifyContent: 'center',
  },
  breakerText:{
    color: 'rgb(25, 52, 65)',
    marginLeft: 12,
    fontWeight: '600',

  },
  button:{
    flexDirection: 'column',
    backgroundColor: 'rgb(25, 52, 65)',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
   buttonText:{
     color: 'white',
     fontWeight:'bold',
   },
   price:{
     alignSelf: 'flex-end',
     color: 'white',
     fontWeight:'bold',
   },
   textBox:{
     height: 55,
     width: '90%',
     borderColor: 'grey',
     borderWidth: 1,
     margin: 10,
     color: 'grey',
   },

})