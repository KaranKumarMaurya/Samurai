/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import locator from './src/locator';
import settingPage from './src/settingPage';

AppRegistry.registerComponent(appName, () => settingPage);
