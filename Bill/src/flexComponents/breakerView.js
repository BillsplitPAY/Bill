import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

export default class BreakerView extends React.Component{
  render(){
    <View style={styles.descView}>
            {this.mappy(this.props.screenProps.yo.order.items)}
    </View>
  }
}

const styles = StyleSheet.create({

  descView:{
    height: 'auto',
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    backgroundColor:'white',
    justifyContent: 'space-between',
    flexGrow: 1,
    margin: 10,
  },
})
