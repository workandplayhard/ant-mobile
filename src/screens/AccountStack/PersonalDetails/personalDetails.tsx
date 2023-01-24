import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import {
  Button,
  Container,
  Dropdown,
  Gap,
  PageTitle,
  ScrollContainer,
  TextField,
  TextInput,
  TextMaskInput,
} from '@/components'
import NavHeader from '@/navigation/components/NavHeader'
import { t } from '@/i18n'
import { useApp } from '@/hooks'
import { NavScreens, NavTabs, RouteParamList } from '@/navigation'
import { IOption } from '@/types'
import { RH } from '@/theme'

import mask from './mask'
import mock from './mockData.json'

import styles from './styles'

const PersonalDetails: React.FC = () => {
  const [fullName, setFullName] = useState<string>('')
  const [idNumber, setIdNumber] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [creditCard, setCreditCard] = useState<string>('')
  const [celluars, setCelluars] = useState<IOption<string>[]>(mock.celluars)
  const [email, setEmail] = useState<string>('')
  const isFocused = useIsFocused()
  const { onChangeTheme } = useApp()
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()

  const onSelectCelluar = useCallback(
    (index: number, isSelected: boolean) => {
      let _c = [...celluars]
      _c = _c.map((item) => {
        item.isSelected = false
        return item
      })

      _c[index].isSelected = isSelected
    },
    [celluars],
  )

  useEffect(() => {
    if (isFocused) {
      onChangeTheme({ statusBarStyle: 'dark-content' })
    } else {
      onChangeTheme({ statusBarStyle: 'light-content' })
    }
  }, [onChangeTheme, isFocused])

  const applyMask = useCallback((text: string | undefined) => {
    const numberCount = text?.replace(/\D+/g, '').length || 0
    if (numberCount <= 10) {
      return mask.phoneNumber_1
    } else if (numberCount === 11) {
      return mask.phoneNumber_2
    } else {
      return mask.phoneNumber_3
    }
  }, [])

  return (
    <Container style={styles.container}>
      <View style={styles.headerContainer}>
        <NavHeader hasBackButton />
        <PageTitle title={t('personalDetails')} titleAlign="left" />
      </View>
      <Gap gap={40} />
      <ScrollContainer contentContainerStyle={styles.contentContainer}>
        <TextInput
          value={fullName}
          mode="light"
          label={t('fullName')}
          placeholder={mock.placeholder.fullName}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onChange={(fullName: string) => setFullName(fullName)}
          style={styles.input}
        />

        <Gap gap={20} />
        <TextMaskInput
          mask={mask.idNumber}
          mode="light"
          value={idNumber}
          label={t('idNumber')}
          obfuscationCharacter="X"
          placeholder={mock.placeholder.idNumber}
          style={styles.input}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onChange={(idNumber: string) => setIdNumber(idNumber)}
        />

        <Gap gap={20} />
        <TextMaskInput
          mask={applyMask}
          mode="light"
          value={phoneNumber}
          label={t('phoneNumber')}
          placeholder={mock.placeholder.phoneNumber}
          style={styles.input}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onChange={(phoneNumber: string) => setPhoneNumber(phoneNumber)}
        />

        <Gap gap={20} />
        <TextMaskInput
          mask={mask.creditCard}
          mode="light"
          value={creditCard}
          label={t('credit')}
          style={styles.input}
          obfuscationCharacter="X"
          showObfuscated={true}
          placeholder={mock.placeholder.creditCard}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onChange={(creditCard: string) => setCreditCard(creditCard)}
        />

        <Gap gap={20} />
        <TextField text={t('celluar')} style={styles.label} />
        <Gap gap={5} />
        <Dropdown<string>
          data={celluars}
          placeholder={t('placeholder')}
          buttonText={t(
            String(celluars.filter((item) => item.isSelected).map((item) => item.label)),
          )}
          onChange={(item, index) => onSelectCelluar(index, !item.isSelected)}
          dropDownStyle={{ ...styles.dropdownPos, height: celluars.length * RH(60) }}
          rowStyle={{ height: RH(60) }}
          buttonStyle={{ height: RH(70) }}
        >
          {(item) => <TextField text={t(item.label)} style={styles.subSourcePeriodText} />}
        </Dropdown>

        <Gap gap={20} />
        <TextInput
          value={email}
          mode="light"
          label={t('email')}
          placeholder={mock.placeholder.email}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onChange={(email: string) => setEmail(email)}
          style={styles.input}
          keyboardType="email-address"
        />

        <Gap gap={60} />
        <Button
          variant="primary"
          size="lg"
          text={t('next')}
          onPress={() =>
            navigation.navigate(NavTabs.homeTab, { screen: NavScreens.home.paymentFinalization })
          }
        />

        <Gap gap={150} />
      </ScrollContainer>
    </Container>
  )
}

export default PersonalDetails
