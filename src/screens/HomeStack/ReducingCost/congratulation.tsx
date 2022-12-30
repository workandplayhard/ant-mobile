import React from 'react'
import { View } from 'react-native'

import { Button, Container, Gap, ImageView, TextField } from '@/components'
import { t } from '@/i18n'
import { useData } from '@/hooks'
import { ICost } from '@/types'

import Plan from './plan'

import mockData from './mockData.json'

import styles from './styles'

import ReducingBackground from '@/assets/images/img_reducing.png'

const Congratulation = () => {
  const { onTVOffer, onSuccess, tvSuccess } = useData()

  return (
    <Container>
      {tvSuccess && (
        <View style={styles.contentContainer}>
          <Plan title={t('currentPlanReduce')} costs={mockData.currentPlan as unknown as ICost[]} />

          <Gap gap={40} />
          <Button
            variant="pure"
            size="lg"
            text={t('insuranceDetails')}
            wrapperStyle={styles.insuranceWrapper}
            textStyle={styles.insuranceText}
          />

          <Gap gap={60} />
        </View>
      )}
      <View style={styles.contentContainer}>
        <View style={styles.congratulationContainer}>
          <ImageView url={ReducingBackground} style={styles.congratulationBackground} />
          <TextField text={t('congratulations')} style={styles.congratulationTitle} />

          <Gap gap={15} />
          <TextField text={t('bestTelephonePlan')} style={styles.congratulationContent} />

          <Gap gap={30} />
          <Button
            variant="primary"
            size="lg"
            text={t('next')}
            onPress={() => {
              onSuccess(false)
              onTVOffer(true)
            }}
          />
        </View>
      </View>
    </Container>
  )
}

export default Congratulation
