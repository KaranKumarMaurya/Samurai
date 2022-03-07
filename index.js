/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import locator from './src/locator';

AppRegistry.registerComponent(appName, () => locator);
