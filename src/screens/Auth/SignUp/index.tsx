import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

import { Button, ScrollContainer } from '@/components'
import WrapperWithBackground from '@/screens/HomeStack/shared/wrapperWithBackground'
import { t } from '@/i18n'
import { PAGE_HORIZONTAL_PADDING, TEXT_DARK_PLACEHOLDER_COLOR } from '@/theme'

import styles from './styles'

const SignUpScreen: React.FC = () => {
  // const { onSignUp } = useAuth()
  const [iDNumber, setIDNumber] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [celluarCompany, setCellularCompany] = useState<string>('')
  const [creditCardNumber, setCreditCardNumber] = useState<string>('')
  // const [password, setPassword] = useState<string>('')
  // const [confirmPassword, setConfirmPassword] = useState<string>('')
  // const [email, setEmail] = useState<string>('')

  return (
    <WrapperWithBackground>
      <ScrollContainer style={styles.container} contentContainerStyle={{ alignContent: 'center' }}>
        <View style={{ padding: PAGE_HORIZONTAL_PADDING }}>
          <Text style={styles.title}>Lorem Ipsum is simply dummy text</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.textField]}
            placeholder={t('idNumber')}
            placeholderTextColor={TEXT_DARK_PLACEHOLDER_COLOR}
            value={iDNumber}
            onChangeText={setIDNumber}
          />

          <TextInput
            keyboardType="numeric"
            style={[styles.textField]}
            placeholder={t('phoneNumber')}
            placeholderTextColor={TEXT_DARK_PLACEHOLDER_COLOR}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <TextInput
            style={[styles.textField]}
            placeholder={t('celluarCompany')}
            placeholderTextColor={TEXT_DARK_PLACEHOLDER_COLOR}
            value={celluarCompany}
            onChangeText={setCellularCompany}
          />

          <TextInput
            keyboardType="numeric"
            style={[styles.textField]}
            placeholder={t('creditCardNumber')}
            placeholderTextColor={TEXT_DARK_PLACEHOLDER_COLOR}
            value={creditCardNumber}
            onChangeText={setCreditCardNumber}
          />

          <Button
            disabled={!(iDNumber || phoneNumber || celluarCompany || creditCardNumber)}
            buttonStyle={styles.button}
            size="lg"
            text={t('next')}
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
