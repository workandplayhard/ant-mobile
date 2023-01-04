import 'react-native-gesture-handler'

/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native'

import App from './App'
import { name as appName } from './app.json'

if (__DEV__) {
  LogBox.ignoreLogs([
    // https://github.com/GeekyAnts/NativeBase/issues/3109
    'Animated: `useNativeDriver` was not specified',
    'Animated: `Animated.event now requires a second argument for options',
    'i18next::formatter: there was no format function for maximumfractiondigits: 2)',
  ])
} else {
  console.log = () => null
}

AppRegistry.registerComponent(appName, () => App)
