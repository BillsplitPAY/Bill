import React from 'react';

import { StackNavigator } from 'react-navigation';

//import Appy from './Appy';
import Menu from './menu';
import ItemPage from './itemPage';
import Items from './items';
import ItemsTest from './itemsTest';

const App1 = StackNavigator({
    ScreenOne: { screen: Menu},
    ScreenTwo: { screen: ItemPage},
    ScreenThree: {screen: ItemsTest},
    ScreenFour: {screen: ItemPage},
})

export default App1;
