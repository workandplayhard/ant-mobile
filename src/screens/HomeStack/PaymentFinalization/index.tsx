import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { t } from 'i18next'
import { NavScreens, RouteParamList } from '@/navigation'
import { Gap, ImageView, PageTitle, ScrollContainer, TextField } from '@/components'

import Pig from '@/assets/images/img_pig.png'

import styles from './styles'

export const PaymentFinalization: React.FC = () => {
  const [percentage, setPercentage] = React.useState(0)
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((currentPercentage: number) => {
        if (currentPercentage > 98) {
          navigation.navigate(NavScreens.home.otherInformationSources)
          clearInterval(interval)
        }

        return currentPercentage + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [navigation])

  return (
    <ScrollContainer style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Gap gap={330} />
      <PageTitle
        title={t('finalizationTitle')}
        titleAlign="center"
        subTitle={t('finalizationSubTitle')}
        subTitleAlign="center"
        mode="dark"
      />

      <Gap gap={60} />
      <TextField text={t('percentage', { value: percentage })} style={styles.percentage} />

      <Gap gap={90} />
      <ImageView url={Pig} style={styles.pos} />

      <Gap gap={200} />
    </ScrollContainer>
  )
}

export default PaymentFinalization
