import React from 'react';

import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image } from 'react-native';
import { Container, Content, Icon, Header, Body } from 'native-base';

import Menu from './menu.js';
import ItemPage from './itemPage';
import Items from './items';


export default class DrawerNav extends React.Component{
  render(){
    return(
      <DrawerNavy />
    )
  }
};
const CustomDrawerContentComponent = (props) => {
  <View style={styles.contain}>
    <View style={styles.drawerHeader}>
      <View>
        <Image style={styles.drawerImage} source={require('../img/BreakfastSandwich.jpg')} />
        <Text style={styles.userName}> Roscoe Coney </Text>
      </View>
    </View>

    <View>
      <DrawerItems {...props} />
    </View>
  </View>
};

const DrawerNavy = DrawerNavigator({
  ScreenOne: { screen: Menu},
  ScreenTwo: { screen: ItemPage},
  ScreenThree: {screen: Items},
  ScreenFour: {screen: ItemPage},
},
  {
    initialRouteName: 'ScreenOne',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});

const styles = StyleSheet.create({

  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,

  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  },
  userName: {
    color: '#252326',
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20
  }

})
