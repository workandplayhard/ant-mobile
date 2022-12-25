import React from 'react'
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

  return (
    <ScrollContainer style={styles.container}>
      <View style={styles.paddingHorizontalStandard}>
        <NavHeader hasBackButton />

        <Gap gap={22} />
        <PageTitle title={t('otherInformationSources')} titleAlign="left" />
      </View>

      <Bank />
      <Information />
      <Period />

      <View style={styles.line} />

      <Footer />

      <Gap gap={60} />
      <View style={styles.paddingHorizontalStandard}>
        <Button
          variant="primary"
          size="lg"
          text={t('next')}
          buttonStyle={styles.paddingHorizontalStandard}
        />
      </View>

      <Gap gap={200} />
    </ScrollContainer>
  )
}

export default OtherInformationSources
