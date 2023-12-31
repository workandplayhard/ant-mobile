import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Trans } from 'react-i18next'

import { NavScreens, RouteParamList } from '@/navigation'
import { Gap, ImageView, PageTitle, TextField, Col, Container } from '@/components'
import { useApp } from '@/hooks'
import { t } from '@/i18n'

import Pig from '@/assets/images/img_pig.png'

import styles from './styles'

export const PaymentFinalization: React.FC = () => {
  const [percentage, setPercentage] = React.useState(0)
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const timer = useRef<any>(null)
  const { onChangeTheme } = useApp()

  useEffect(() => {
    onChangeTheme({ statusBarStyle: 'light-content', statusBarColor: 'light-content' })
  }, [onChangeTheme])

  useEffect(() => {
    timer.current = setInterval(() => {
      setPercentage((currentPercentage: number) => {
        if (currentPercentage > 99) {
          navigation.navigate(NavScreens.home.customerExpense)
          clearInterval(timer.current)
        }

        return Math.min(100, currentPercentage + 1)
      })
    }, 50)

    return () => clearInterval(timer.current)
  }, [navigation])

  return (
    <Container style={styles.container}>
      <Col style={styles.contentContainer}>
        <PageTitle
          title={t('finalizationTitle')}
          titleAlign="center"
          subTitle={t('finalizationSubTitle')}
          subTitleAlign="center"
          mode="dark"
        />

        <Gap gap={60} />
        <TextField style={styles.percentage}>
          <Trans
            i18nKey="percentage"
            values={{ value: percentage }}
            components={{
              tag: <TextField style={styles.percentageSymbol} />,
            }}
          />
        </TextField>

        <Gap gap={75} />
        <ImageView url={Pig} />
      </Col>
    </Container>
  )
}

export default PaymentFinalization
