import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bill</Text>
        <Text style={styles.instructions}>Dividing the final bill has NEVER been easier.</Text>
        <Image style={styles.qrCode} source={require('./img/qrCode2.png')}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252326',
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    color: '#7a8c3f'
  },
  instructions: {
        marginTop: 40,
    textAlign: 'center',
    color: '#7a8c3f',
    fontSize: 15,
    marginBottom: 5,
  },
  qrCode: {
    marginTop: 80,
    width: 150,
    height: 150 
  }
});









