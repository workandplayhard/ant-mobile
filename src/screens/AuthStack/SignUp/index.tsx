import React, { useCallback, useMemo, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, ScrollContainer } from '@/components'
import WrapperWithBackground from '@/screens/HomeStack/shared/wrapperWithBackground'
import { useAuth } from '@/hooks'
import { t } from '@/i18n'
import { NavScreens, RouteParamList } from '@/navigation'
import { PAGE_HORIZONTAL_PADDING } from '@/theme'

import styles from './styles'

const SignUpScreen: React.FC = () => {
  const { createUserLoading, onSignUp: signUp } = useAuth()
  const [idNumber, setIDNumber] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [celluarCompany, setCellularCompany] = useState<string>('')
  const [creditCardNumber, setCreditCardNumber] = useState<string>('')
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()

  const canSubmit = useMemo(
    () => !createUserLoading && (idNumber || phoneNumber || celluarCompany || creditCardNumber),
    [celluarCompany, createUserLoading, creditCardNumber, idNumber, phoneNumber],
  )
  const validate = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (idNumber: string, phoneNumber: string, celluarCompany: string, creditCardNumber: string) => {
      if (
        !isNaN(+idNumber) &&
        !isNaN(+phoneNumber) &&
        !isNaN(+celluarCompany) &&
        !isNaN(+creditCardNumber)
      ) {
        return true
      }

      return false
    },
    [],
  )
  const onSignUp = useCallback(() => {
    if (validate(idNumber, phoneNumber, celluarCompany, creditCardNumber)) {
      signUp(
        {
          email: 'test@test.com',
          phoneNumber: '555555',
          name: 'test',
          password1: 'test0225',
          password2: 'test0225',
        },
        async (success, message) => {
          if (success) {
            navigation.navigate(NavScreens.home.home)
          }
        },
      )
    }
  }, [celluarCompany, creditCardNumber, idNumber, navigation, phoneNumber, signUp, validate])

  return (
    <WrapperWithBackground>
      <ScrollContainer style={styles.container} contentContainerStyle={{ alignContent: 'center' }}>
        <View style={{ padding: PAGE_HORIZONTAL_PADDING }}>
          <Text style={styles.title}>Lorem Ipsum is simply dummy text</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.textField]}
            placeholder={t('idNumber')}
            value={idNumber}
            onChangeText={setIDNumber}
          />

          <TextInput
            keyboardType="numeric"
            style={[styles.textField]}
            placeholder={t('phoneNumber')}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <TextInput
            style={[styles.textField]}
            placeholder={t('celluarCompany')}
            value={celluarCompany}
            onChangeText={setCellularCompany}
          />

          <TextInput
            keyboardType="numeric"
            style={[styles.textField]}
            placeholder={t('creditCardNumber')}
            value={creditCardNumber}
            onChangeText={setCreditCardNumber}
          />

          <Button
            disabled={!canSubmit}
            buttonStyle={styles.button}
            size="lg"
            text={t('next')}
            onPress={() => onSignUp()}
          />
        </View>

        {/* <TextInput
        style={[styles.textField]}
        placeholder={t('email')}
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry
        style={[styles.textField]}
        placeholder={t('password')}
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        secureTextEntry
        style={[styles.textField]}
        placeholder={t('conformPassword')}
        placeholderTextColor="white"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button
        variant="primary"
        size="xs"
        text={t('signUp')}
        onPress={() => onSignUp({ email, password })}
      /> */}
      </ScrollContainer>
    </WrapperWithBackground>
  )
}

export default SignUpScreen
