import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import { Button } from '@/components'
import { t } from '@/i18n'
import { useAuth, useApp } from '@/hooks'

import styles from './styles'

const SignInScreen: React.FC = () => {
  const { onSignIn } = useAuth()
  const { isRTL } = useApp()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('signIn')}</Text>
      <TextInput
        style={[styles.textField, isRTL && styles.rtlInput]}
        placeholder={t('email')}
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry
        style={[styles.textField, isRTL && styles.rtlInput]}
        placeholder={t('password')}
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        variant="primary"
        size="xs"
        text={t('signIn')}
        onPress={() => onSignIn({ email, password })}
      />
    </View>
  )
}

export default SignInScreen
