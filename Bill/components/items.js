import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import { List, ListItem } from "react-native-elements";


export default class Items extends Component {
  render() {
    return (

      <View>
        <View style = {styles.item}>

          <View style={styles.textBox}>
            <Text style={styles.foodName}>Chicken Sandwich</Text>
            <Text style={styles.foodDescription}>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </Text>
            <Text style={styles.foodPrice}>$300</Text>
          </View>

          <View><Image style={styles.img} source={require('../img/qrCode2.png')}/></View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: 100,
    width: 'auto',
    borderColor: 'black',
    borderWidth: 1,
  },
  textBox:{
    flexDirection: 'column',
    flexShrink: 2,
    justifyContent: 'space-around',
  },
  foodName:{
    fontSize: 15,
    fontWeight: 'bold',
  },
  foodDescription:{

  },
  foodPrice:{
    color: 'orange',
    fontWeight: 'bold',
  },

  img:{
    height: 75,
    width: 75,
    marginRight: 5,
    marginTop: 5,
    marginLeft: 50,
  }
});
