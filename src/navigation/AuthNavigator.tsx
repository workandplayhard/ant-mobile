import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import { NAV_HEADER_OPTION } from '@/constants'

import SignIn from '@/screens/Auth/SignIn'
import SignUp from '@/screens/Auth/SignUp'
import { NavScreens } from './constants'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboard"
      screenOptions={{
        ...NAV_HEADER_OPTION,
      }}
    >
      <Stack.Screen name={NavScreens.auth.signIn} component={SignIn} />
      <Stack.Screen name={NavScreens.auth.signUp} component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
