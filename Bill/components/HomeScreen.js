import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'


class HomeScreen extends Component {
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
            onPress={() => this.props.navigation.navigate('Settings')} full>
            <Text style={{ color: 'white' }}>Home Screen</Text>
          </Button>
        </Content>

      </Container>

    )
  }

}

export default HomeScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});