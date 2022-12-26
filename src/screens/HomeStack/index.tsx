import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import { NavScreens } from '@/navigation'
import { NAV_HEADER_OPTION } from '@/constants'

import PaymentOptimizationScreen from './PaymentOptimization'
import PricingScreen from './Pricing'
import TermsOfUseScreen from './TermsOfUse'
import ScreenA from './ScreenA'
import Home from './Home'
import PaymentProcessOverview from './PaymentProcessOverview'
import OtherInformationSources from './OtherInformationSources'

const Stack = createStackNavigator()

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavScreens.home.home}
      screenOptions={{
        ...NAV_HEADER_OPTION,
      }}
    >
      <Stack.Screen name={NavScreens.home.screenA} component={ScreenA} />
      <Stack.Screen name={NavScreens.home.home} component={Home} />
      <Stack.Screen name={NavScreens.home.pricing} component={PricingScreen} />
      <Stack.Screen
        name={NavScreens.home.paymentOptimization}
        component={PaymentOptimizationScreen}
      />
      <Stack.Screen name={NavScreens.home.termsOfUse} component={TermsOfUseScreen} />
      <Stack.Screen
        name={NavScreens.home.paymentProgressOverview}
        component={PaymentProcessOverview}
      />
      <Stack.Screen
        name={NavScreens.home.otherInformationSources}
        component={OtherInformationSources}
      />
    </Stack.Navigator>
  )
}

export default StackScreen
