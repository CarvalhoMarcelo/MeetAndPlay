/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
export * from './src/Componentes';

AppRegistry.registerComponent(appName, () => App);
