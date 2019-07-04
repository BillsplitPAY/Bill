import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity, TextInput, Animated} from 'react-native';
import firebase from 'firebase';
import Cart from './cart'

class Welcome extends React.Component {
  constructor(){
    super();
    this.state={
      zoom: new Animated.Value(0),
      timer: null,
      signIn: ()=>{return null},
      value: '',
      opacity: 0,
    }
    this.animator=this.animator.bind(this)
    this.signIn=this.signIn.bind(this)
  }

  animator(){
      return Animated.timing(this.state.zoom, {duration: 300, toValue: 100})
  }

  signIn(){
    return(
      <View style={{height: 200, width: 200, alignSelf:'center', marginTop: 50, borderColor: 'black', borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Please Enter Your Name:</Text>

        <TextInput style={{borderColor: 'black', borderWidth: 1, height: '20%', width: '90%'}}></TextInput>
        <Button title='Ok' onPress={()=>{this.props.navigation.navigate('One')}}></Button>
      </View>
    )
  }

  render(){
    // console.log(this.props)
    return(
      <Animated.View style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'flex-start'}}>

        <View style={{opacity: this.state.opacity, height: 150, width: 200, alignSelf:'center', marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontFamily: 'Futura', fontSize: 17}}>Please Enter Your Name:</Text>
          <TextInput  style={{borderColor: 'black', borderWidth: 4, borderRadius:5, height: 'auto', width: '120%', fontSize: 40, textAlign: 'center', paddingTop:5, paddingBottom:5,}} onChangeText={(text) => {this.setState({value: text})}} value={this.state.value}></TextInput>
          <Button title='Ok' onPress={()=>{this.props.screenProps.f_updateName(this.state.value); this.props.navigation.navigate('One'); firebase.database().ref('Restaurant').child('testTable').update({[this.state.value]:{'name': this.state.value}})}}></Button>
        </View>


        <Animated.Text style ={{ fontSize: this.state.zoom, fontFamily: 'Futura'}}>Bill</Animated.Text>

      </Animated.View>
    )
  }

  // {setTimeout(()=>{this.props.navigation.navigate('One')}, 1000)}

  componentDidMount(){
    this.animator().start();
    setTimeout(()=>{this.setState({opacity: 1})}, 1500)

  }
}

export default Welcome
