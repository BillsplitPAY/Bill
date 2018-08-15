import Menu from './menu';
import ItemPage from './itemPage';
import Items from './items';
import DrawerNav from './drawerNav';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import {Button, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';


 const StackNav = StackNavigator({
    ScreenOne: { screen: Menu},
    ScreenTwo: { screen: Items},
    ScreenThree: {screen: ItemPage},
});

export default class Nav extends React.Component {
  render(){
    return(
              <StackNav screenProps={this.props}/>
    )
  }
}


// const mapStateToProps = state => ({
//   navigation: state.navigation,
// })
//
// export default connect(mapStateToProps)(Nav);




// const Stacky = StackNavigator({
//   ScreenOne: {}
// })



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
