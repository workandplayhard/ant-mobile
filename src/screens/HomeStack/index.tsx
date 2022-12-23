import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import { NAV_HEADER_OPTION } from '@/constants'

import PaymentOptimizationScreen from './PaymentOptimizationScreen'

const Stack = createStackNavigator()

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...NAV_HEADER_OPTION,
      }}
    >
      <Stack.Screen name="PaymentOptimizationScreen" component={PaymentOptimizationScreen} />
    </Stack.Navigator>
  )
}

export default StackScreen
