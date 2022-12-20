import React, { useState } from 'react'
import { Text, View, TextInput, I18nManager } from 'react-native'

import { Button, ScrollContainer } from '@/components'
import HeaderImage from '@/assets/images/img_signup_header.svg'
import { t } from '@/i18n'
import { useAuth, useApp } from '@/hooks'
import { PAGE_HORIZONTAL_PADDING, RW } from '@/theme'

import styles from './styles'

const SignUpScreen: React.FC = () => {
  // const { onSignUp } = useAuth()
  const [IDNumber, setIDNumber] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [celluarCompany, setCellularCompany] = useState<string>('')
  const [creditCardNumber, setCreditCardNumber] = useState<string>('')
  // const [password, setPassword] = useState<string>('')
  // const [confirmPassword, setConfirmPassword] = useState<string>('')
  // const [email, setEmail] = useState<string>('')

  return (
    <ScrollContainer style={styles.container} contentContainerStyle={{ alignContent: 'center' }}>
      <HeaderImage style={styles.headerImage} width={RW(350)} height={RW(140)} />
      <View style={{ padding: PAGE_HORIZONTAL_PADDING }}>
        <Text style={styles.title}>Lorem Ipsum is simply dummy text</Text>
        <TextInput
          keyboardType="numeric"
          style={[styles.textField, I18nManager.isRTL && styles.rtlInput]}
          placeholder={t('idNumber')}
          placeholderTextColor="#5E626C"
          value={IDNumber}
          onChangeText={setIDNumber}
        />

        <TextInput
          keyboardType="numeric"
          style={[styles.textField, I18nManager.isRTL && styles.rtlInput]}
          placeholder={t('phoneNumber')}
          placeholderTextColor="#5E626C"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TextInput
          style={[styles.textField, I18nManager.isRTL && styles.rtlInput]}
          placeholder={t('celluarCompany')}
          placeholderTextColor="#5E626C"
          value={celluarCompany}
          onChangeText={setCellularCompany}
        />

        <TextInput
          keyboardType="numeric"
          style={[styles.textField, I18nManager.isRTL && styles.rtlInput]}
          placeholder={t('Credit Card Number')}
          placeholderTextColor="#5E626C"
          value={creditCardNumber}
          onChangeText={setCreditCardNumber}
        />

        <Button disabled={true} buttonStyle={styles.button} size="lg" text={t('next')} />
      </View>

      {/* <TextInput
        style={[styles.textField, I18nManager.isRTL && styles.rtlInput]}
        placeholder={t('email')}
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry
        style={[styles.textField, I18nManager.isRTL && styles.rtlInput]}
        placeholder={t('password')}
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        secureTextEntry
        style={[styles.textField, I18nManager.isRTL && styles.rtlInput]}
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
  )
}

export default SignUpScreen
