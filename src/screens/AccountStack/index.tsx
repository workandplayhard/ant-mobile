import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import { NavScreens } from '@/navigation'
import { NAV_HEADER_OPTION } from '@/constants'
import ScreenA from './ScreenA'
import PersonalDetails from './PersonalDetails'

const Stack = createStackNavigator()

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavScreens.account.personalDetails}
      screenOptions={{
        ...NAV_HEADER_OPTION,
      }}
    >
      <Stack.Screen name={NavScreens.account.screenA} component={ScreenA} />
      <Stack.Screen name={NavScreens.account.personalDetails} component={PersonalDetails} />
    </Stack.Navigator>
  )
}

export default StackScreen
