//this is the content page
import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import ScrollStuff from './scrollStuff.js';
import Items from './items.js';
//import DrawerNav from './drawerNav.js';
import { StackNavigator } from 'react-navigation';

export default class Menu extends Component {
  constructor(props){
    super(props);
    //this.state = {results: 'naw', load: 'naw', current: ''}
  }
  static navigationOptions = {
    title: "Spring Garden"
  }

  render() {
    const { navigate } = this.props.navigation

    if (this.props.screenProps.yo.load === 'naw'){
      return(
        <View style={styles.wait}><Text>'Nigga Wait!'</Text></View>
      )
    }
    else{
      return (
        <View style={styles.menuPage}>
          <View style={styles.scroller}><ScrollStuff /></View>
          <ScrollView>
            <View style = {styles.items}>
              <Items item={this.props.screenProps.yo.results.daily_menus[1].daily_menu} navi={this.props.navigation.navigate}/>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={()=>{navigate('ScreenFour'); console.log(this.props.propers)}}>
            <Text style={styles.buttonText}>View Order</Text>

          </TouchableOpacity>
        </View>
      );
    }
  }

  componentDidMount(){

    fetch('https://api.foursquare.com/v2/venues/search?ll=40.7128,74.0060&v=20180818', {
      headers: {
        mode: 'cors',
        method: 'GET',
        'client-id': 'KUZ5DS21RPAGXYPZGDG1R2ACKA43X2SLTY3VNX5WN3PZLYYS',
        'client-secret': 'WJ2HM3V5YFXSCDQSIVBDCJUCCSQLPRAWLXIZAXWFIRMGALVS'
      }
    }).then((data) => console.log(data))
  }
  }


const styles = StyleSheet.create({
  menuPage: {
    display: 'flex',
    //flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    height: 'auto',
    width: 375,
  },
  scroller: {
    height: 36,
    width: 'auto',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'green',
    //borderWidth: 0,
    //borderColor: 'black',
  },
  items: {
    position: 'relative',
    flexDirection: 'column',
    height: 'auto',
    backgroundColor: 'white',
    //borderWidth: 2,
    borderColor: 'blue',
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
   }
});

//<View style={styles.header}><Text style={styles.headerText}>Spring Garden</Text></View>
//https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624

// <TouchableHighlight onPress={() => navigate('DrawerOpen')} style={[styles.button, {backgroundColor: '#7567B1'}]}>
//   <Text> Open Drawer </Text>
// </TouchableHighlight>




fetch('https://api.foursquare.com/v2/venues/search?ll=40.7128,74.0060&client_id=KUZ5DS21RPAGXYPZGDG1R2ACKA43X2SLTY3VNX5WN3PZLYYS&client_secret=WJ2HM3V5YFXSCDQSIVBDCJUCCSQLPRAWLXIZAXWFIRMGALVS&v=20180818', {
  headers: {
    mode: 'cors',
  }
}).then((data) => console.log(data))
