import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'

import { t } from 'i18next'
import { NavScreens, RouteParamList } from '@/navigation'
import { Gap, ImageView, PageTitle, ScrollContainer } from '@/components'

import Pig from '@/assets/images/img_pig.png'

import styles from './styles'

export const PaymentFinalization: React.FC = () => {
  const [timerCount, setTimer] = React.useState(0)
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((lastPercent: number) => {
        if (lastPercent > 98) {
          navigation.navigate(NavScreens.home.paymentOptimization)
          clearInterval(interval)
        }

        return lastPercent + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [navigation])

  return (
    <ScrollContainer style={styles.container}>
      <Gap gap={330} />
      <PageTitle
        title={t('finalizationTitle')}
        titleAlign="center"
        subTitle={t('finalizationSubTitle')}
        subTitleAlign="center"
        mode="dark"
      />

      <Gap gap={60} />
      <View style={styles.pos}>
        <Text style={styles.timer}> {timerCount}% </Text>
      </View>

      <Gap gap={90} />
      <View style={styles.pos}>
        <ImageView url={Pig} style={styles.pos} />
      </View>

      <Gap gap={200} />
    </ScrollContainer>
  )
}

export default PaymentFinalization
