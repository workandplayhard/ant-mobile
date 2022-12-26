import React, { useState } from 'react'

import { Button, Gap, PageTitle, ScrollContainer, TextInput, TextMaskInput } from '@/components'
import NavHeader from '@/navigation/components/NavHeader'
import WrapperWithBackground from '@/screens/HomeStack/shared/wrapperWithBackground'
import { t } from '@/i18n'

import mask from './mask'
import mock from './mockData.json'

import styles from './styles'

const PersonalDetails: React.FC = () => {
  const [fullName, setFullName] = useState<string>('')
  const [idNumber, setIdNumber] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [creditCard, setCreditCard] = useState<string>('')
  const [celluar, setCelluar] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  return (
    <WrapperWithBackground>
      <ScrollContainer style={styles.container} contentContainerStyle={styles.contentContainer}>
        <NavHeader hasBackButton />
        <Gap gap={22} />
        <PageTitle title={t('personalDetails')} titleAlign="left" />

        <Gap gap={40} />
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
          mask={(text) => {
            const numberCount = text?.replace(/\D+/g, '').length || 0
            if (numberCount <= 10) {
              return mask.phoneNumber_1
            } else if (numberCount === 11) {
              return mask.phoneNumber_2
            } else {
              return mask.phoneNumber_3
            }
          }}
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
        <TextInput
          value={celluar}
          mode="light"
          label={t('celluar')}
          placeholder={mock.placeholder.cellur}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onChange={(celluar: string) => setCelluar(celluar)}
          style={styles.input}
        />

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
        <Button variant="primary" size="lg" text={t('next')} />

        <Gap gap={200} />
      </ScrollContainer>
    </WrapperWithBackground>
  )
}

export default PersonalDetails
