import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import { NavScreens } from '@/navigation'
import { NAV_HEADER_OPTION } from '@/constants'
import ScreenA from './ScreenA'
import PersonalDetails from './PersonalDetails'
import Home from '../HomeStack/Home'
import Summary from '../HomeStack/Summary'
import OtherInformationSources from '../HomeStack/OtherInformationSources'

const Stack = createStackNavigator()

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavScreens.home.otherInformationSources}
      screenOptions={{
        ...NAV_HEADER_OPTION,
      }}
    >
      <Stack.Screen name={NavScreens.account.screenA} component={ScreenA} />
      <Stack.Screen
        name={NavScreens.home.otherInformationSources}
        component={OtherInformationSources}
      />
    </Stack.Navigator>
  )
}

export default StackScreen
