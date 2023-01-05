import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { NavScreens, RouteParamList } from '@/navigation'
import { Button, Col, Gap, Icon, PageTitle, Row, TextField } from '@/components'

import { t } from '@/i18n'
import WrapperWithBackground from '../shared/wrapperWithBackground'

import mockData from './mockData.json'

import styles from './styles'

const Pricing: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()

  return (
    <WrapperWithBackground>
      <View style={styles.container}>
        <Gap horizontal={false} gap={130} />
        <PageTitle
          title={t('homeTitle')}
          titleAlign="center"
          subTitle={mockData.homeSubTitle}
          subTitleAlign="center"
          mode="dark"
        />
        <Gap horizontal={false} gap={40} />

        <Col>
          {mockData.plans.map((plan) => (
            <React.Fragment key={plan.id}>
              <View style={styles.plan}>
                <TouchableOpacity>
                  <Row style={styles.planContent}>
                    <View style={styles.iconContainer}>
                      <Icon name="circleCheckIcon" iconStyle={styles.icon} />
                    </View>
                    <TextField text={plan.description} style={styles.planText} />
                  </Row>
                </TouchableOpacity>
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
