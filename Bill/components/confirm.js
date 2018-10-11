import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, TouchableOpacity, TextInput, Picker} from 'react-native';

const Confirm = () => {
  return(
    <View>
      <Text>Your Payment is Confirmed. A copy of your receipt has been sent to ljoconnor5@gmail.com</Text>

      <Text>'$15.00 still outstanding on Table'</Text>
    </View>
  )
}

export default Confirm;
