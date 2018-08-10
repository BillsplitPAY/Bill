import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'


export default class SettingsScreen extends Component {
  render() {
    return (

      <Container>
        <Header >
          <Left>
          <Icon name='ios-menu' onPress={()=> this.props.navigation.navigate('DrawerOpen')}/>
          </Left>
        </Header>
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')} full>
            <Text style={{ color: 'white' }}>Settings Screen</Text>
          </Button>
        </Content>

      </Container>

    )
  }

}



const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});