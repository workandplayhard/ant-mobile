import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { NavScreens, RouteParamList } from '@/navigation'
import { Button, Col, Gap, Icon, PageTitle, Row, TextField } from '@/components'
import { useApp } from '@/hooks'

import { t } from '@/i18n'
import WrapperWithBackground from '../shared/wrapperWithBackground'

import mockData from './mockData.json'

import styles from './styles'

const Pricing: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const isFocused = useIsFocused()
  const { onChangeTheme } = useApp()

  useEffect(() => {
    if (!isFocused) {
      onChangeTheme({ statusBarStyle: 'dark-content' })
    }
  }, [onChangeTheme, isFocused])

  return (
    <WrapperWithBackground>
      <View style={styles.container}>
        <Gap horizontal={false} gap={130} />
        <PageTitle
          title={t('homeTitle')}
          titleAlign="center"
          subTitle={t('printingAndTypeSettingIndustry')}
          subTitleAlign="center"
          mode="dark"
        />
        <Gap horizontal={false} gap={40} />

        <Col>
          {mockData.plans.map((plan) => (
            <React.Fragment key={plan.id}>
              <View style={styles.plan}>
                <Row style={styles.planContent}>
                  <View style={styles.iconContainer}>
                    <Icon name="circleCheckIcon" iconStyle={styles.icon} />
                  </View>
                  <TextField text={t('loremIpsumIsSimply')} style={styles.planText} />
                </Row>
              </View>
              <Gap horizontal={false} gap={20} />
            </React.Fragment>
          ))}
          <Gap horizontal={false} gap={40} />

          <Button
            variant="primary"
            text={t('next')}
            onPress={() => navigation.navigate(NavScreens.home.termsOfUse)}
          />

          <Gap horizontal={false} gap={130} />
        </Col>
      </View>
    </WrapperWithBackground>
  )
}

export default Pricing
