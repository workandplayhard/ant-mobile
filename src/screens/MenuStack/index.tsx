import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import { NavScreens } from '@/navigation'
import { NAV_HEADER_OPTION } from '@/constants'
import ScreenA from './ScreenA'

const Stack = createStackNavigator()

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavScreens.menu.screenA}
      screenOptions={{
        ...NAV_HEADER_OPTION,
      }}
    >
      <Stack.Screen name={NavScreens.menu.screenA} component={ScreenA} />
    </Stack.Navigator>
  )
}

export default StackScreen
