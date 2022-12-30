import React, { useEffect, useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'

import { useData } from '@/hooks'
import { t } from '@/i18n'
import { Gap, ScrollContainer } from '@/components'
import { ICost } from '@/types'

import WrapperWithStepper from '../shared/wrapperWithStepper'
import Congratulation from './congratulation'
import Average from './average'
import Plan from './plan'

import mockData from './mockData.json'

import styles from './styles'

const ReducingCost: React.FC = () => {
  const { success, tvOffer, tvPlan, tvSuccess } = useData()

  return (
    <ScrollContainer style={styles.container}>
      <WrapperWithStepper>
        {!success && !tvOffer && !tvPlan && !tvSuccess && (
          <View>
            <View style={styles.contentContainer}>
              <Plan title={t('currentPlan')} costs={mockData.costs as unknown as ICost[]} />

              <Gap gap={60} />
              <View style={styles.line} />

              <Gap gap={40} />
              <Plan
                title={t('averageTelephoneUseDetail')}
                costs={mockData.telephone as unknown as ICost[]}
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
    </ScrollContainer>
  )
}

export default ReducingCost
