import React, { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Gap, TextInput } from '@/components'
import { t } from '@/i18n'
import { useAuth, useApp } from '@/hooks'
import { NavScreens, RouteParamList } from '@/navigation'

import styles from './styles'

interface IError {
  email?: string
  password?: string
}

const SignInScreen: React.FC = () => {
  const { onSignIn } = useAuth()
  const { isRTL } = useApp()
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()

  const [email, setEmail] = useState<string>('test@gmail.com')
  const [password, setPassword] = useState<string>('test')
  const [error, setError] = useState<IError>({
    email: '',
    password: '',
  })

  const validate = useCallback((_email: string, _password: string) => {
    const _error: IError = {}

    if (!_email) _error.email = t('auth.emailEmptyError')
    if (!_password) _error.password = t('auth.passwordEmptyError')

    if (_email) {
      const re = /\S+@\S+\.\S+/
      const emailTest = re.test(_email)
      if (!emailTest) _error.email = t('auth.emailIncorrectError')
    }

    setError(_error)
    return !Object.values(_error).some((e) => !!e)
  }, [])

  const onLogin = useCallback(() => {
    if (validate(email, password)) {
      onSignIn({ email, password }, (success, message) => {
        if (success) navigation.navigate(NavScreens.home.home)
      })
    }
  }, [email, navigation, onSignIn, password, validate])

  useEffect(() => {
    setError((e) => (email ? { ...e, email: '' } : e))
  }, [email])

  useEffect(() => {
    setError((e) => (password ? { ...e, password: '' } : e))
  }, [password])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('signIn')}</Text>
      <TextInput
        style={[styles.textField, isRTL && styles.rtlInput]}
        placeholder={t('email')}
        value={email}
        onChange={setEmail}
        error={error.email || ''}
      />
      <TextInput
        secureTextEntry
        style={[styles.textField, isRTL && styles.rtlInput]}
        placeholder={t('password')}
        value={password}
        onChange={setPassword}
        error={error.password || ''}
      />
      <Gap gap={30} />
      <Button variant="primary" size="xs" text={t('signIn')} onPress={onLogin} />
      <Gap gap={20} />
      <Button
        variant="primary"
        size="xs"
        text={t('signUp')}
        onPress={() => navigation.navigate(NavScreens.auth.signUp)}
      />
    </View>
  )
}

export default SignInScreen
