import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Container, Gap, ImageView, TextField } from '@/components'
import { t } from '@/i18n'
import { useReduceCost } from '@/hooks'
import { ICost } from '@/types'
import { NavScreens, RouteParamList } from '@/navigation'

import Plan from './plan'

import mockData from './mockData'

import styles from './styles'

import ReducingBackground from '@/assets/images/img_reducing.png'

const Congratulation = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const { success, onTVOffer, onSuccess, tvSuccess } = useReduceCost()

  const onPress = useCallback(() => {
    if (!tvSuccess) {
      onSuccess(false)
      onTVOffer(true)
    } else {
      navigation.navigate(NavScreens.home.summary)
    }
  }, [navigation, onSuccess, onTVOffer, tvSuccess])

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
          <TextField
            text={success ? t('successCongratulations') : t('congratulations')}
            style={styles.congratulationTitle}
          />

          <Gap gap={15} />
          {success && (
            <TextField text={t('bestTelephonePlan')} style={styles.congratulationContent} />
          )}

          <Gap gap={30} />
          <Button variant="primary" size="lg" text={t('next')} onPress={() => onPress()} />
        </View>
      </View>
    </Container>
  )
}

export default Congratulation
