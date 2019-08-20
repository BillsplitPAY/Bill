import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TextInput} from 'react-native';
import {gStyle} from '../containers/styles'
import Breaker from '../flexComponents/breaker'
import { Ionicons } from '@expo/vector-icons';
import Item from '../flexComponents/item';
import BottomButton from '../flexComponents/bottomButton';
import NoteBox from '../flexComponents/noteBox'

class ItemPage extends Component {

  constructor(props){
    super(props)
    this.state = {quantity: 1}
    this.repeater = this.repeater.bind(this)
    this.options = this.options.bind(this)
    // this.randomImage = this.randomImage.bind(this)
  }

  repeater(array, navigate, screenProps){
    return array.map((item)=>{
      return (
      <TouchableHighlight onPress={()=>{this.props.screenProps.f_setCurrentItem(item); this.props.screenProps.f_setCategory(item.category); this.props.navigation.navigate('ItemPage')}} key={item.name} style={{borderColor: '#212121', borderWidth:1, borderRadius: 10, height: 170, width: 170, margin: 5, justifyContent:'flex-start',  paddingTop: 5, paddingBottom:20, overflow:'hidden'}}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:5, paddingRight:5, }}>
          <Text style={{fontWeight: 'bold', width: '80%', fontSize:18, flexWrap: 'wrap'}}>{item.name}</Text>
          <Text style={{color: 'green', width: '30%', fontWeight: 'bold', fontSize:18}}>${item.price}</Text>
        </View>
        <View style={{margin: 5, overflow: 'hidden', height:'auto'}}><Text style={{color: 'black', paddingLeft: 5}}>{item.desc}</Text></View>
        </View>
      </TouchableHighlight>
    )
    })
  }

// <Item key={item.name} foodItem={item} category={array} navi={navigate} screenProps={screenProps}/>
  options(){
    if (this.props.screenProps.o_currentItem.options.length !== 0){
      return(
        <View><Breaker value={'Item Options'}/><View style={{height: 'auto'}}></View></View>
      )
    }
  }

  // randomImage(array){
  //   return require(array(4))
  // }


  render(){

    const {navigate} = this.props.navigation;
    //category is an object with the category's name under the name property, and the category's items under .entries.items
    const currentItem = this.props.screenProps.o_currentItem;
    const itemName = this.props.screenProps.o_currentItem.name;
    const itemDesc = this.props.screenProps.o_currentItem.desc;
    const itemPrice = this.props.screenProps.o_currentItem.price;

    const imageArray= [
      '../images/1.jpg',
      '../images/2.jpg',
      '../images/3.jpg',
      '../images/4.jpg',
      '../images/5.jpg',
      '../images/6.jpg',
      '../images/7.jpeg',
      '../images/8.jpg',
      '../images/9.jpg',
    ]

    return(
      <View style={{justifyContent: 'space-between', height: '100%', }}>

      <View style={{height: 'auto'}}>

          <View style={{borderWidth:1, borderColor:'black', backgroundColor: '#212121'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Menu')}} style={{width: '30%', position:'relative', left: 10}}>
              <View style={{flexDirection:'row'}}><Ionicons name="ios-arrow-back" size={40} style={{color:'white'}}/>
                <Text style={{fontSize: 20, alignSelf: 'center', position:'relative', left: 5, color:'white', fontFamily:'Avenir', letterSpacing:4,}}>Menu</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'space-between', flexDirection:'row',  position:'relative', height: 'auto', width: '99%', marginHorizontal: '.5%',}}>

            <View style={{height: 'auto', maxHeight:'90%', flexDirection: 'row', marginTop: 5, width: '70%',  paddingBottom:-200}}>
              <View style={{width: '100%', height: 'auto', justifyContent: 'flex-start'}}>
                <Text style={{fontSize: 30,  fontFamily: 'Avenir'}}>{itemName}</Text>
                <Text style={styles.itemDescription}>{itemDesc}</Text>

                <View style={{width: 'auto', position:'relative', alignItems:'center', height: 30, flexDirection: 'row', justifyContent: 'flex-start', }}>
                  <View style={{flexDirection:'row', borderRightColor: '#212121', borderRightWidth: 1, width: 'auto', justifyContent: 'flex-start', paddingRight: 10}}>
                    <Text style={{fontSize: 18}}>4.3</Text>
                    <Ionicons name="ios-star" size={14} style={{position:'relative', top:2}} />
                  </View>
                  <View style={{flexDirection:'row', borderRightColor: '#212121', borderRightWidth: 1, width: 'auto', justifyContent: 'flex-start',}}>
                    <Text style={{fontSize: 18, color: 'blue', marginHorizontal:10}}>Reviews</Text>
                  </View>
                  <View style={{flexDirection: 'row', width: 'auto', justifyContent: 'center'}}>
                    <Image style={{width: 60, height: 30, marginHorizontal:10}} source={require(`../images/yelp.png`)}/>
                  </View>
                </View>

                <View style={{marginBottom: 0,  height: '60%', width: '100%', backgroundColor:'rgb(223,223,223)', justifyContent:'center'}}><Text style={{alignSelf: 'center', fontSize: 18}}>Required Selection Area</Text></View>
              </View>
            </View>

            <View style={{justifyContent: 'space-between', flexDirection: 'column', height:550, width: '30%', position:'relative', marginTop: 5,}}>
                <Image style={{width: '100%', height: '20%'}} source={require(`../images/crab1.jpg`)}/>
                <Image style={{width: '100%', height: '20%'}} source={require(`../images/crab2.jpg`)}/>
                <Image style={{width: '100%', height: '20%'}} source={require(`../images/crab3.jpg`)}/>
                <View style={{width: '100%', height: '9%', backgroundColor: '#212121', justifyContent:'center', alignItems:'center'}}><Text style={{color: 'white'}}>Photos (7)</Text></View>
                <View style={{alignItems: 'center', justifyContent:'space-between', width: 'auto', height:'30%', flexDirection: 'column', position:'relative', top:20,}}>
                  <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) + 1)})}}><Ionicons name="ios-add-circle" size={40} /></TouchableHighlight>
                  <TextInput style={styles.textBox} defaultValue={String(this.state.quantity)} autoFocus={false}/>
                  <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) - 1)})}}><Ionicons name="ios-remove-circle" size={40} /></TouchableHighlight>
                </View>
            </View>

          </View>
        </View>

        {this.options()}


        <BottomButton buttonText={'Add to Cart'} buttonPrice={(itemPrice * this.state.quantity).toFixed(2)} doThis={() => {navigate('Menu'); for(let i = 0; i < this.state.quantity; i++){this.props.screenProps.f_addItem((this.props.screenProps.o_currentItem))}}}/>
      </View>
    )
  }

}

// <View style={{ alignItems: 'center', justifyContent:'space-between', width: '40%', flexDirection: 'row',alignSelf:'center' }}>
//   <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) - 1)})}}><Ionicons name="ios-remove-circle" size={40} /></TouchableHighlight>
//   <TextInput style={styles.textBox} defaultValue={String(this.state.quantity)} autoFocus={false}/>
//   <TouchableHighlight onPress={()=>{this.setState({quantity: String(Number(this.state.quantity) + 1)})}}><Ionicons name="ios-add-circle" size={40} /></TouchableHighlight>
// </View>





export default ItemPage;

const styles = StyleSheet.create({

topDiv:{},

itemAndCounterRow:{ height: 'auto', marginTop: 0, },

itemDiv:{ width: '80%', justifyContent: 'center', paddingLeft: 10, },

itemName:{ fontSize: 35,  fontFamily: 'AvenirNext-Regular'},

itemDescription:{ fontSize: 18, width: '100%', paddingRight: 8, marginBottom: 20, marginTop: 5, fontFamily: 'Avenir'},

counterDiv: { alignItems: 'center', justifyContent:'space-between', width: 'auto', height:'40%', flexDirection: 'column', position:'relative', top:20, },

similarDiv:{ height: 'auto',   flexDirection: 'row', alignItems: 'center',  marginTop: 20},

button:{ flexDirection: 'row', backgroundColor: 'black', height: 45, width: '99%', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginBottom: 2, borderRadius: 5, },

buttonText:{ color: 'white', fontWeight:'bold', marginLeft: '37%', fontSize: 17, },

textBox:{ width: 40, height: 40, alignSelf: 'center', borderRadius: 5, textAlign: 'center', fontSize: 30, marginLeft: 8, marginRight: 8, },
})
