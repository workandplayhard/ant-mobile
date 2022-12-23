/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'

import { t } from '@/i18n'
import MenuStack from '@/screens/MenuStack'
import SettingsStack from '@/screens/SettingsStack'
import HomeStack from '@/screens/HomeStack'
import MyAccountStack from '@/screens/MyAccountStack'
import { Icon, TextField } from '@/components'
import IconNames from '@/components/Icon/icons'
import {
  RH,
  RW,
  font,
  WHITE,
  TAB_BG_COLOR,
  BUTTON_GRADIENT_END,
  TAB_MENU_ACTIVE_COLOR,
  BUTTON_GRADIENT_START,
  TAB_ACTIVE_TINT_COLOR,
  TAB_INACTIVE_TINT_COLOR,
} from '@/theme'
import { getIconName } from '@/utils'
import { NAV_HEADER_OPTION } from '@/constants'
import { NAV_SCREENS } from './constants'

import PaymentOptimizationScreen from '@/screens/HomeStack/PaymentOptimizationScreen'
import Pricing from '@/screens/HomeStack/Pricing'
import TermsOfUse from '@/screens/HomeStack/TermsOfUse'

import styles from './styles'

const AppStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const iconName = getIconName(route.name)

          return (
            <>
              <View
                style={[
                  styles.container,
                  route.name === NAV_SCREENS.stacks.menuStack && styles.firstItem,
                  route.name === NAV_SCREENS.stacks.accountStack && styles.lastItem,
                ]}
              >
                {focused && (
                  <LinearGradient
                    colors={[BUTTON_GRADIENT_START, BUTTON_GRADIENT_END]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.border}
                  />
                )}
                <Icon
                  name={iconName as keyof typeof IconNames}
                  wrapperStyle={{
                    opacity: focused ? 1 : 0.5,
                  }}
                  size={RW(24)}
                />
                <TextField
                  text={t(route.name)}
                  style={{
                    ...font('pp.regular', RW(12), focused ? WHITE : TAB_MENU_ACTIVE_COLOR, RW(18)),
                    paddingVertical: RH(7),
                  }}
                />
              </View>
            </>
          )
        },
        tabBarVisible: true,
        headerShown: false,
        tabBarActiveTintColor: TAB_ACTIVE_TINT_COLOR,
        tabBarInactiveTintColor: TAB_INACTIVE_TINT_COLOR,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: RH(90),
          borderWidth: 0,
          backgroundColor: TAB_BG_COLOR,
          borderTopLeftRadius: RW(25),
          borderTopRightRadius: RW(25),
          position: 'absolute',
          paddingBottom: 0,
        },
      })}
      initialRouteName="StackA"
    >
      <Tab.Screen name={NAV_SCREENS.stacks.menuStack} component={MenuStack} />
      <Tab.Screen name={NAV_SCREENS.stacks.settingsStack} component={SettingsStack} />
      <Tab.Screen name={NAV_SCREENS.stacks.homeStack} component={HomeStack} />
      <Tab.Screen name={NAV_SCREENS.stacks.accountStack} component={MyAccountStack} />
    </Tab.Navigator>
  )
}
const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="TabNavigator" screenOptions={NAV_HEADER_OPTION}>
      <AppStack.Screen name="TabNavigator" component={TabNavigator} />
      <AppStack.Screen name="PaymentOptimizationScreen" component={PaymentOptimizationScreen} />
      <AppStack.Screen name="Pricing" component={Pricing} />
      <AppStack.Screen name="TermsOfUse" component={TermsOfUse} />
    </AppStack.Navigator>
  )
}

export default AppNavigator
