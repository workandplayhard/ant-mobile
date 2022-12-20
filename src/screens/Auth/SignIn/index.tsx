import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button, TextInput } from '@/components'
import { t } from '@/i18n'
import { useAuth, useApp } from '@/hooks'

import styles from './styles'

const SignInScreen: React.FC = () => {
  const { onSignIn } = useAuth()
  const { isRTL } = useApp()
  const navigation = useNavigation()

  const [email, setEmail] = useState<string>('test@gmail.com')
  const [password, setPassword] = useState<string>('test')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('signIn')}</Text>
      <TextInput
        style={[styles.textField, isRTL && styles.rtlInput]}
        placeholder={t('email')}
        value={email}
        onChange={setEmail}
      />
      <TextInput
        secureTextEntry
        style={[styles.textField, isRTL && styles.rtlInput]}
        placeholder={t('password')}
        value={password}
        onChange={setPassword}
      />
      <Button
        variant="primary"
        size="xs"
        text={t('signIn')}
        onPress={() => onSignIn({ email, password })}
      />
      <Button
        variant="primary"
        size="xs"
        text={t('signUp')}
        onPress={() => navigation.navigate('SignUp' as never)}
      />
    </View>
  )
}

export default SignInScreen
