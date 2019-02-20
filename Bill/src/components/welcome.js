import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity, TextInput, Animated} from 'react-native';

class Welcome extends React.Component {
  constructor(){
    super();
    this.state={
      zoom: new Animated.Value(0),
      timer: null
    }
    this.animator=this.animator.bind(this)
  }

  animator(){
      return Animated.timing(this.state.zoom, {duration: 300, toValue: 100})
  }

  render(){
    console.log(this.props)
    return(
      <Animated.View style={{borderColor: 'red', borderWidth: 1, height: '100%', width: '100%', alignItems: 'center', justifyContent:'center'}}>
        <Animated.Text style ={{ fontSize: this.state.zoom, fontFamily: 'Futura'}}>Bill</Animated.Text>
        {setTimeout(()=>{this.props.navigation.navigate('One')}, 1000)}
      </Animated.View>
    )
  }

  componentDidMount(){
    this.animator().start();

  }
}

export default Welcome
