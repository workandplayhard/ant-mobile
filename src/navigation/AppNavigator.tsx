/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'

import { NAV_HEADER_OPTION } from '@/constants'
import StackA from '@/screens/StackA'
import StackB from '@/screens/StackB'
import StackC from '@/screens/StackC'
import StackD from '@/screens/StackD'

const AppStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <View>
              <Text style={{ color: focused ? 'red' : 'blue' }}>{route.name}</Text>
            </View>
          )
        },
        tabBarVisible: false,
        headerShown: false,
        tabBarActiveTintColor: 'grey',
        tabBarInactiveTintColor: 'red',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      })}
      initialRouteName="StackA"
    >
      <Tab.Screen name="StackA" component={StackA} />
      <Tab.Screen name="StackB" component={StackB} />
      <Tab.Screen name="StackC" component={StackC} />
      <Tab.Screen name="StackD" component={StackD} />
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
