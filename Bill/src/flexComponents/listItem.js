import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput,
  Picker, Animated, TouchableWithoutFeedback} from 'react-native';
import {stateToggler} from '../helperFunctions/pureFunctions';
import {gStyle} from '../containers/styles';
import {animator} from '../helperFunctions/pureFunctions'

export const ListItem = (props) => {
    return (
      <TouchableOpacity style={styles.inDesc} onPress={()=>{props.animate().start()}}>
        <Animated.View style = {{height: '100%', width: '100%', right: props.right, borderWidth: props.borderWidth, flexDirection: 'row'}}>
          <View style={styles.touch}>
            <Text style={styles.descItems, {fontWeight: 'bold'}}>{props.itemAmount}</Text>
            <Text style={styles.descText, {fontStyle: 'italic'}}>{props.itemName}</Text>
            <Text style={styles.descPrice, {fontWeight: 'bold'}}>${props.itemPrice}</Text>
          </View>
          <View style={{borderColor: 'red', borderWidth: 1, height: '100%', width: 90, flexDirection: 'row'}}>
            <View style={{backgroundColor: 'red', height: '100%', width: '50%'}}><Text>Edit</Text></View>
            <View style={{backgroundColor: 'blue', height: '100%', width: '50%'}}><Text>Delete</Text></View>
          </View>

          </Animated.View>
        </TouchableOpacity>
    )
  }

export class CartListItem extends Component {
  constructor(props){
    super(props);
    this.state = {edit: new Animated.Value(0)}
    this.animator = this.animator.bind(this)
  }

  animator(){
      if (this.state.edit._value === 0){
          return Animated.timing(this.state.edit, {duration: 200, toValue: 95})
      }
      else{
          return Animated.timing(this.state.edit, {duration: 200, toValue: 0})
      }
  }
  render(){
    return (
      <ListItem {...this.props} animate={this.animator} right={this.state.edit} borderWidth={null}/>
    )
  }
}

export class CustomListItem extends Component {
  constructor(props){
    super(props)
    this.state = {edit: new Animated.Value(0)}
    this.borderAnimator = this.borderAnimator.bind(this)
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
    return (
      <ListItem {...this.props} animate={this.borderAnimator} right={null} borderWidth={this.state.edit}/>
    )
  }
}

export class OrderListItem extends Component {
  constructor(props){
    super(props)
    this.state = {edit: new Animated.Value(0)}
    this.borderAnimator = this.borderAnimator.bind(this)
  }
  borderAnimator(){
    return Animated.timing(this.state.edit, {duration: 1, toValue: 0})
}
  render(){
    return (
      <ListItem {...this.props} animate={this.borderAnimator} right={null} borderWidth={this.state.edit}/>
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
