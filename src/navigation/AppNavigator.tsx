/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'

import { NAV_HEADER_OPTION } from '@/constants'
import Menu from '@/screens/Menu'
import Settings from '@/screens/Settings'
import Home from '@/screens/Home'
import MyAccount from '@/screens/MyAccount'
import { Icon } from '@/components'
import IconNames from '@/components/Icon/icons'
import {
  BUTTON_GRADIENT_END,
  BUTTON_GRADIENT_START,
  MENU_FOCUS,
  RH,
  RW,
  WHITE,
  font,
  getIconName,
} from '@/theme'
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
              <View style={styles.container}>
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
                <Text
                  style={{
                    ...font('pp.regular', RW(12), focused ? WHITE : MENU_FOCUS, RW(18)),
                    paddingVertical: RH(7),
                  }}
                >
                  {route.name}
                </Text>
              </View>
            </>
          )
        },
        tabBarVisible: true,
        headerShown: false,
        tabBarActiveTintColor: 'grey',
        tabBarInactiveTintColor: 'red',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          backgroundColor: '#353339',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      })}
      initialRouteName="StackA"
    >
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My account" component={MyAccount} />
    </Tab.Navigator>
  )
}
const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="TabNavigator" screenOptions={NAV_HEADER_OPTION}>
      <AppStack.Screen name="TabNavigator" component={TabNavigator} />
    </AppStack.Navigator>
  )
}

export default AppNavigator
