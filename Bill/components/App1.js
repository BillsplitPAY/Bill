import React from 'react';

import { StackNavigator } from 'react-navigation';
import Appy from './Appy';
import Menu from './menu';
import ItemPage from './itemPage';
import Items from './items';

const App1 = StackNavigator({
    //ScreenOne: { screen: Appy},
    ScreenOne: { screen: Menu},
    ScreenTwo: {screen: Items},
    ScreenThree: {screen: ItemPage},
})

export default App1;
