import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput,
  Picker, Animated, TouchableWithoutFeedback} from 'react-native';
import {stateToggler} from '../helperFunctions/pureFunctions';
import {gStyle} from '../containers/styles';
import {animator} from '../helperFunctions/pureFunctions'
import { fetchAPIData, addItem, submitOrder, emptyCart, setTip, setCategory, setMenu, setCurrentItem, removeItem, yPos, updateName, toFirebase, clearFirebase, updateTable, subtractCustomPrice, addCustomPrice} from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

export const ListItem = (props) => {
    return (
      <TouchableOpacity style={styles.inDesc} onPress={()=>{props.animate().start()}}>
        <Animated.View style = {{height: '100%', width: '100%', right: props.right, borderWidth: props.borderWidth, flexDirection: 'row', backgroundColor:props.backgroundColor, color:props.textColor}}>
          <View style={styles.touch}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.descItems, {fontFamily:'Avenir-Light', letterSpacing:2, fontSize: 18, color:'#212121'}}>{props.itemAmount}</Text>
              <Text style={styles.descText, {position:'relative', left: 25, fontFamily:'Avenir-Light', letterSpacing:2, fontSize: 18, color:'#212121' }}>{props.itemName}</Text>
            </View>
            <Text style={styles.descPrice, {fontFamily:'Avenir-Heavy', letterSpacing:2, fontSize: 18, color:'green'}}>{props.itemPrice}.00</Text>
          </View>
          <View style={{height: '100%', width: 90, flexDirection: 'row'}}>
            <TouchableHighlight style={{borderRightColor: 'white', borderRightWidth:.5, backgroundColor:'#212121', justifyContent:'center', alignItems: 'center', height: '100%', width: '50%'}} onPress={()=>{props.editor(props.itemName, props.cartArray, props.newItem)}}><Text style={{color:'white'}}>Edit</Text></TouchableHighlight>
            <TouchableHighlight style={{backgroundColor:'#212121', justifyContent:'center', alignItems: 'center', height: '100%', width: 'auto', paddingRight:10, paddingLeft: 2}} onPress={()=>{props.screenProps.f_removeItem(props.itemName)}}><Text style={{color:'white'}}>Delete</Text></TouchableHighlight>
          </View>
        </Animated.View>
      </TouchableOpacity>
    )
  }

  class CustomListItem extends React.Component {
    constructor(props){
      super(props);
      this.state={
        backgroundColor:'white',
        textColor:'black',
        selected: false,
        amount:0
      }
      this.itemSelect=this.itemSelect.bind(this)
    }

itemSelect(){
    if (this.state.selected===false){
      this.setState({backgroundColor: 'black', textColor:'white', selected:true, amount: this.state.amount + this.props.itemPrice});
        this.props.f_addCustomPrice(this.props.itemPrice);
    }
    else{
      this.setState({backgroundColor: 'white', textColor:'black', selected:false, amount: this.state.amount - this.props.itemPrice});
      this.props.f_subtractCustomPrice(this.props.itemPrice);
      }
    }

    render(){

      return (
        <TouchableOpacity style={styles.inDesc} onPress={()=>{this.itemSelect()}}>
          <Animated.View style = {{height: '100%', width: '100%', flexDirection: 'row', backgroundColor:this.state.backgroundColor}}>
            <View style={styles.touch}>
              <Text style={styles.descItems, {fontWeight: 'bold', color:this.state.textColor}}>{this.props.itemAmount}</Text>
              <Text style={styles.descText, {fontStyle: 'italic', color:this.state.textColor}}>{this.props.itemName}</Text>
              <Text style={styles.descPrice, {fontWeight: 'bold', color:this.state.textColor}}>${this.props.itemPrice}</Text>
            </View>
            <View style={{height: '100%', width: 90, flexDirection: 'row'}}>
              <TouchableHighlight style={{borderRightColor: 'white', borderRightWidth:.5, backgroundColor:'#212121', justifyContent:'center', alignItems: 'center', height: '100%', width: '50%'}} onPress={()=>{props.editor(props.itemName, props.cartArray, props.newItem)}}><Text style={{color:'white'}}>Edit</Text></TouchableHighlight>
              <TouchableHighlight style={{backgroundColor:'#212121', justifyContent:'center', alignItems: 'center', height: '100%', width: 'auto', paddingRight:10, paddingLeft: 2}} onPress={()=>{props.screenProps.f_removeItem(props.itemName)}}><Text style={{color:'white'}}>Delete</Text></TouchableHighlight>
            </View>
          </Animated.View>
        </TouchableOpacity>
      )
    }
  }

  function mapStateToProps(state){
    return {
      order: state.order,
      o_user: state.user
    }
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators(
      {
        f_fetchAPIData: fetchAPIData,
        f_addItem: addItem,
        f_removeItem: removeItem,
        f_submitOrder: submitOrder,
        f_emptyCart: emptyCart,
        f_setCategory: setCategory,
        f_setMenu: setMenu,
        f_setCurrentItem: setCurrentItem,
        f_updateName: updateName,
        f_yPos: yPos,
        f_setTip: setTip,
        f_toFirebase: toFirebase,
        f_clearFirebase: clearFirebase,
        f_updateTable: updateTable,
        f_addCustomPrice: addCustomPrice,
        f_subtractCustomPrice: subtractCustomPrice

      }, dispatch)
  }


  // export default CustomListItem
  export default connect(mapStateToProps, mapDispatchToProps)(CustomListItem)

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
      <ListItem {...this.props} animate={this.animator} right={this.state.edit} borderWidth={null} />
    )
  }
}

// export class CustomListItem extends Component {
//   constructor(props){
//     super(props)
//     this.state = {edit: new Animated.Value(0)}
//     this.backgroundAnimator = this.backgroundAnimator.bind(this)
//     this.textAnimator = this.textAnimator.bind(this)
//   }
//   backgroundAnimator(){
//       if (this.state.edit._value === 0){
//           return Animated.timing(this.state.edit, {duration: 200, toValue: '#212121'})
//       }
//       else{
//           return Animated.timing(this.state.edit, {duration: 200, toValue: 'white'})
//       }
//   }
//   textAnimator(){
//       if (this.state.edit._value === 0){
//           return Animated.timing(this.state.edit, {duration: 200, toValue: 'white'})
//       }
//       else{
//           return Animated.timing(this.state.edit, {duration: 200, toValue: 'green'})
//       }
//   }
//   render(){
//     return (
//       <ListItem {...this.props} animate={this.borderAnimator} right={null} backgroundColor={this.backgroundAnimator} textColor={this.textAnimator} borderWidth={this.state.edit}/>
//     )
//   }
// }

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

    flexDirection: 'row',
    marginTop: 0,
    width: '100%',
    height: 30,
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
    paddingLeft:7,
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
