import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RNBootSplash from 'react-native-bootsplash'
import { NavigationContainer } from '@react-navigation/native'

import initialize from '@/services/initialize'
import { AppProvider, AuthProvider } from '@/contexts'
import { IS_IOS } from '@/constants'
import '@/i18n'
import Splash from '@/screens/Splash'
import MyApp from './src'

initialize()

const App = () => {
  const [splashVisible, setSplashVisible] = useState(true)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={IS_IOS ? 'padding' : undefined} style={{ flex: 1 }}>
        <AppProvider>
          <AuthProvider>
            <NavigationContainer onReady={() => RNBootSplash.hide()}>
              {splashVisible ? <Splash onLoadEnd={() => setSplashVisible(false)} /> : <MyApp />}
            </NavigationContainer>
          </AuthProvider>
        </AppProvider>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  )
}

export default App
