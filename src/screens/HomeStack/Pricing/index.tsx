import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { NavScreens, RouteParamList } from '@/navigation'
import { Button, CheckBox, Col, Gap, PageTitle, Row, TextField } from '@/components'

import { t } from '@/i18n'
import WrapperWithBackground from '../shared/wrapperWithBackground'

import mockData from './mockData.json'

import styles from './styles'

const Pricing: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const [selected, setSelected] = React.useState<number | null>(null)

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
                <Row style={styles.planContent}>
                  <CheckBox
                    isChecked={selected === plan.id}
                    onChange={() => setSelected(plan.id)}
                  />
                  <TextField text={plan.description} style={styles.planText} />
                </Row>
              </View>
              <Gap horizontal={false} gap={20} />
            </React.Fragment>
          ))}
          <Gap horizontal={false} gap={40} />

          <Button
            variant="primary"
            disabled={!selected}
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
