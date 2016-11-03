/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
  Platform
} from 'react-native'
import App from './src/App'

AppRegistry.registerComponent('example', () => App);

if (Platform.OS == 'web') {
  var app = document.createElement('div')
  document.body.appendChild(app);
  AppRegistry.runApplication('example', {
    rootTag: app
  })
}
