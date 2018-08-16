import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import { Container, Content, Icon, Header, Body } from 'native-base'

//import Appy from './Appy';
import Menu from './menu';
import ItemPage from './itemPage';
import Items from './items';
import DrawerNav from './drawerNav';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store.js';
import Mappers from './mappers.js';
import Order from './order.js';

export default class App1 extends React.Component {
  render(){
    return(
            <Provider store={store}>
            <Mappers />
            </Provider>
    )
  }
}

// const Stacky = StackNavigator({
//   ScreenOne: {}
// })


const StackNav = StackNavigator({
    ScreenOne: { screen: ItemPage},
    ScreenTwo: { screen: Items},
    ScreenThree: {screen: ItemPage},
    ScreenFour: {screen: ItemPage},
    ScreenFive: {screen: Menu},
});
// const CustomDrawerContentComponent = (props) => (
//   <Container>
//     <Header style={styles.drawerHeader}>
//       <Body>
//         <Image
//           style={styles.drawerImage}
//           source={require('../img/BreakfastSandwich.jpg')} />
//         <Text style={styles.userName}> Roscoe Coney </Text>
//       </Body>
//     </Header>
//
//     <Content>
//       <DrawerItems {...props} />
//     </Content>
//   </Container>
// );
// const DrawerNavy = DrawerNavigator({
//   // For each screen that you can navigate to, create a new entry like this:
//   ScreenOne: { screen: Menu},
//   ScreenTwo: { screen: ItemPage},
//   ScreenThree: {screen: ItemsTest},
//   ScreenFour: {screen: ItemPage},
// },
//   {
//     initialRouteName: 'ScreenOne',
//     drawerPosition: 'left',
//     contentComponent: CustomDrawerContentComponent,
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle'
// });



//export default App1;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
