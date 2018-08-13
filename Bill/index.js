/** @format */

import {AppRegistry} from 'react-native';
import App from './components/App';
import Appy from './components/Appy.js';
//import Menu from './components/menu.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Appy);
