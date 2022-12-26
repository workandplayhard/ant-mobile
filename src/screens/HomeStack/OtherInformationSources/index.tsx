import React, { useState, useMemo } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Gap, PageTitle, ScrollContainer } from '@/components'
import NavHeader from '@/navigation/components/NavHeader'
import { RouteParamList } from '@/navigation'
import { t } from '@/i18n'

import Bank from './bank'
import Period from './period'
import Footer from './footer'
import Information from './information'

import styles from './styles'

const OtherInformationSources = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const [bankStatus, setBankStatus] = useState<number>(0)
  const [periodStatus, setPeriodStatus] = useState<number>(0)
  const [cardStatus, setCardStatus] = useState<number>(0)

  const enabled = useMemo(() => {
    return bankStatus && cardStatus && periodStatus ? true : false
  }, [cardStatus, bankStatus, periodStatus])

  return (
    <ScrollContainer style={styles.container}>
      <View style={styles.paddingHorizontalStandard}>
        <NavHeader hasBackButton />

        <Gap gap={22} />
        <PageTitle title={t('otherInformationSources')} titleAlign="left" />
      </View>

      <Bank onBankStatus={setBankStatus} onCardStatus={setCardStatus} />
      <Information />
      <Period onPeriodStatus={setPeriodStatus} />

      <View style={styles.line} />

      <Footer />

      <Gap gap={60} />
      <View style={styles.paddingHorizontalStandard}>
        <Button
          variant="primary"
          size="lg"
          disabled={!enabled}
          text={t('next')}
          buttonStyle={styles.paddingHorizontalStandard}
        />
      </View>

      <Gap gap={200} />
    </ScrollContainer>
  )
}

export default OtherInformationSources
