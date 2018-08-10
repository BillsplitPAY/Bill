import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen.js'
import SettingScreen from './SettingsScreen.js'


type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MyApp />
      </View>
    );
  }
}


const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingScreen
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252326',
  },

});








