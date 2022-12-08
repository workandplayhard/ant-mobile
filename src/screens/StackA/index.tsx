import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import { NAV_HEADER_OPTION } from '@/constants'
import ScreenA from './ScreenA'

const Stack = createStackNavigator()

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="ScreenA"
      screenOptions={{
        ...NAV_HEADER_OPTION,
      }}
    >
      <Stack.Screen name="ScreenA" component={ScreenA} />
    </Stack.Navigator>
  )
}

export default StackScreen
