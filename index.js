/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'mobx-react'
import { StoreProviderHOC, RootStore } from './src/stores';
const rootStore = new RootStore()
AppRegistry.registerComponent(appName, () => StoreProviderHOC(App, Provider, rootStore));