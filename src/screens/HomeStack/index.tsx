import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import { NavScreens } from '@/navigation'
import { NAV_HEADER_OPTION } from '@/constants'

import PaymentOptimizationScreen from './PaymentOptimization'
import PricingScreen from './Pricing'
import TermsOfUseScreen from './TermsOfUse'
import ScreenA from './ScreenA'

const Stack = createStackNavigator()

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavScreens.home.screenA}
      screenOptions={{
        ...NAV_HEADER_OPTION,
      }}
    >
      <Stack.Screen name={NavScreens.home.screenA} component={ScreenA} />
      <Stack.Screen name={NavScreens.home.pricing} component={PricingScreen} />
      <Stack.Screen
        name={NavScreens.home.paymentOptimization}
        component={PaymentOptimizationScreen}
      />
      <Stack.Screen name={NavScreens.home.termsOfUse} component={TermsOfUseScreen} />
    </Stack.Navigator>
  )
}

export default StackScreen
