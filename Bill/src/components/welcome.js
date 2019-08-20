import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity, TextInput, Animated} from 'react-native';
import firebase from 'firebase';
import Cart from './cart'
// import {config} from '../../Firebase/firebaseConfig'

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
    return(
      <Animated.View style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'flex-start'}}>
          <Animated.Text style ={{ fontSize: this.state.zoom, fontFamily: 'Avenir-Black', letterSpacing: 25, marginHorizontal: 'auto', marginTop: 100, position:'relative', left: 10, }}>BILL</Animated.Text>
          <Text style={{fontFamily: 'Avenir', letterSpacing: 7, padding: 10,  borderColor: '#212121', borderWidth: 2, marginVertical: 0, position:'relative', top:-15 }}>The Restaurant App</Text>
          <View style={{borderRadius:15, opacity: this.state.opacity, width: '80%', alignSelf:'center', marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
              <TextInput placeholder={'Your Name'} style={{fontFamily: 'Avenir',  backgroundColor: 'rgb(205,205,205)', borderBottomWidth: 1, borderBottomColor:'#212121', height: 'auto', width: '120%',  textAlign: 'left', paddingVertical:20, paddingHorizontal:10,}} onChangeText={(text) => {this.setState({value: text})}} value={this.state.value}></TextInput>
              <TextInput placeholder={'Password'} style={{fontFamily: 'Avenir', backgroundColor: 'rgb(205,205,205)', height: 'auto', width: '120%',  textAlign: 'left', paddingVertical:20, paddingHorizontal:10,}}></TextInput>
          </View>
          <TouchableOpacity style={{position:'relative', alignItems:'center', top: 30, width: '80%', backgroundColor: '#212121', paddingVertical: 20}} onPress={()=>{this.props.screenProps.f_updateName(this.state.value); this.props.navigation.navigate('One');firebase.database().ref('Restaurant').child('testTable').update({[this.state.value]:{'name': this.state.value}})}} >
              <Text style={{color: 'white', fontFamily: 'Avenir',  fontSize:19}}>Sign In</Text>
          </TouchableOpacity>
      </Animated.View>
    )
  }

  // <Text style={{fontFamily: 'Futura', fontSize: 17}}>Please Enter Your Name:</Text>

  // {setTimeout(()=>{this.props.navigation.navigate('One')}, 1000)}

  componentDidMount(){
    // firebase.initializeApp(config);
    this.animator().start();
    setTimeout(()=>{this.setState({opacity: 1})}, 1500)



    // firebase.database().ref('Restaurant').child('testTable').update({[this.state.value]:{'name': this.state.value}})

    // firebase.database().ref('Restaurant').on('value', (snapshot)=>{
    //   console.log(snapshot.val())
    //
    // })
    // firebase.database().ref('Restaurant/testTable').on('value', (snapshot)=>{this.props.screenProps.f_toFirebase(snapshot.val())})


  }
}

export default Welcome
