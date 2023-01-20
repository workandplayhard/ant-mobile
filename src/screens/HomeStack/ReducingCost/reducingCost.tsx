import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { useApp, useReduceCost } from '@/hooks'
import { t } from '@/i18n'
import { Gap } from '@/components'
import { ICost } from '@/types'

import WrapperWithStepper from '../shared/wrapperWithStepper'
import Congratulation from './congratulation'
import Average from './average'
import Plan from './plan'

import mockData from './mockData'

import styles from './styles'

const costsInformation = [
  {
    iconName: 'messageIcon',
    title: 'SMS',
    cost: '3000',
  },
  {
    iconName: 'ringIcon',
    title: 'Calls',
    cost: '3000',
  },
  {
    iconName: 'balloonThinIcon',
    title: t('internet'),
    cost: '1000 GB',
  },
]

const telephoneInformation = [
  {
    title: 'SMS',
    cost: '3000',
  },
  {
    title: 'Calls',
    cost: '3000',
  },
  {
    title: t('internet'),
    cost: '1000 GB',
  },
]

const ReducingCost: React.FC = () => {
  const { success, tvOffer, tvPlan, tvSuccess } = useReduceCost()
  const isFocused = useIsFocused()
  const { onChangeTheme } = useApp()

  useEffect(() => {
    onChangeTheme({ statusBarStyle: 'dark-content' })
  }, [onChangeTheme])

  return (
    <WrapperWithStepper>
      {!success && !tvOffer && !tvPlan && !tvSuccess && (
        <View>
          <View style={styles.contentContainer}>
            <Plan title={t('currentPlan')} costs={costsInformation as unknown as ICost[]} />

            <Gap gap={60} />
            <View style={styles.line} />

            <Gap gap={40} />
            <Plan
              title={t('averageTelephoneUseDetail')}
              costs={telephoneInformation as unknown as ICost[]}
            />
            <Gap gap={60} />
          </View>
          <View style={styles.averageContainer}>
            <Average />
          </View>
        </View>
      )}

      {(success || tvSuccess) && <Congratulation />}
      {(tvOffer || tvPlan) && (
        <View>
          {tvOffer && (
            <View style={styles.contentContainer}>
              <Plan title={t('currentTVPlan')} costs={mockData.tvs as unknown as ICost[]} />

              <Gap gap={60} />
            </View>
          )}
          <View style={styles.averageContainer}>
            <Average />
          </View>
        </View>
      )}
      <Gap gap={100} />
    </WrapperWithStepper>
  )
}

export default ReducingCost
