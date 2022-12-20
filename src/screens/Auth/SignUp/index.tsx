import React, { useState } from 'react'
import { Input, Text, View, TextInput, TouchableOpacity } from 'react-native'

import { Button, Col } from '@/components'
import { t } from '@/i18n'
import { useAuth, useApp } from '@/hooks'

import styles from './styles'

const SignUpScreen: React.FC = () => {
  const { onSignUp } = useAuth()
  const { isRTL } = useApp()

  const [IDNumber, setIDNumber] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [celluarCompany, setCellularCompany] = useState<string>('')
  const [creditCardNumber, setCreditCardNumber] = useState<string>('')
  // const [password, setPassword] = useState<string>('')
  // const [confirmPassword, setConfirmPassword] = useState<string>('')
  // const [email, setEmail] = useState<string>('')

  return (
    <Col style={styles.container}>
      <Text style={styles.title}>Lorem Ipsum is simply dummy text</Text>
      <TextInput
        keyboardType="numeric"
        style={[styles.textField, isRTL && styles.rtlInput]}
        placeholder={t('idNumber')}
        placeholderTextColor="white"
        value={IDNumber}
        onChangeText={setIDNumber}
      />

      <TextInput
        keyboardType="numeric"
        style={[styles.textField, isRTL && styles.rtlInput]}
        placeholder={t('phoneNumber')}
        placeholderTextColor="white"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        style={[styles.textField, isRTL && styles.rtlInput]}
        placeholder={t('celluarCompany')}
        placeholderTextColor="white"
        value={celluarCompany}
        onChangeText={setCellularCompany}
      />

      <TextInput
        keyboardType="numeric"
        style={[styles.textField, isRTL && styles.rtlInput]}
        placeholder={t('creditCardNumber')}
        placeholderTextColor="white"
        value={creditCardNumber}
        onChangeText={setCreditCardNumber}
      />

      {/* <TextInput
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
      <TextInput
        secureTextEntry
        style={[styles.textField, isRTL && styles.rtlInput]}
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
    </Col>
  )
}

export default SignUpScreen
