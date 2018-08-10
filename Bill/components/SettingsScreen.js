import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'


class SettingsScreen extends Component {
  render() {
    return (

      <Container>


        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Settings')} full>
            <Text style={{ color: 'white' }}>Settings Screen</Text>
          </Button>
        </Content>

      </Container>

    )
  }

}

export default SettingsScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});