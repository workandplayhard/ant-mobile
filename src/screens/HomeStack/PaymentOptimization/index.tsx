import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { NavScreens, RouteParamList } from '@/navigation'
import { Button, Col, DateTime, Gap, Icon, Row, ScrollContainer, TextField } from '@/components'
import { DASHBOARD_ICON_COLORS } from '@/theme'

import P from '@/assets/images/img_p.svg'
import { t } from '@/i18n'
import WrapperWithBackground from '../shared/wrapperWithBackground'

import mockData from './mockData.json'

import styles from './styles'

const PaymentOptimization: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()

  return (
    <WrapperWithBackground>
      <ScrollContainer
        style={styles.scrollContainer}
        showScrollBar={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.header}>
          <TextField text={t('greetings', { name: 'John' })} style={styles.headerGreetings} />
          <Gap horizontal={false} gap={5} />
          <TextField text={t('goodToSeeYouAgain')} style={styles.headerGreetingsContent} />
        </View>
        <View style={styles.saveParent}>
          <View style={styles.save}>
            <TextField text={t('saveTitle')} style={styles.saveTitle} />
            <TextField
              text={t('currency', { value: mockData.savePrice })}
              style={styles.savePrice}
            />

            <Row style={styles.saveDateParent}>
              <Col>
                <TextField text={t('saveDateDescription')} style={styles.saveDateDescription} />
                <DateTime
                  value={mockData.saveDateTime}
                  format="DD/MM/YYYY"
                  style={styles.saveDateTime}
                />
              </Col>
              <View>
                <Button
                  variant="primary"
                  buttonStyle={styles.saveButton}
                  iconName="arrowNextIcon"
                />
              </View>
            </Row>
          </View>
        </View>
        <Col style={styles.contentContainer}>
          <Row style={styles.contentIconContainer}>
            <Icon
              name="messageIcon"
              wrapperStyle={styles.iconWrapper}
              badgeColor={DASHBOARD_ICON_COLORS[0]}
            />
            <Icon
              name="ringIcon"
              wrapperStyle={styles.iconWrapper}
              badgeColor={DASHBOARD_ICON_COLORS[0]}
            />
            <Icon
              name="balloonThinIcon"
              wrapperStyle={styles.iconWrapper}
              badgeColor={DASHBOARD_ICON_COLORS[1]}
            />
            <Icon
              name="balloonThinIcon"
              wrapperStyle={styles.iconWrapper}
              badgeColor={DASHBOARD_ICON_COLORS[2]}
            />
          </Row>

          <Row style={[styles.box, styles.contentDescriptionContainer]}>
            <View style={styles.contentDescriptionImg}>
              <P />
            </View>
            <TextField
              text={mockData.contentDescriptionContext}
              style={styles.contentDescriptionContext}
            />
          </Row>
          <Button
            variant="primary"
            text={t('start')}
            style={styles.contentDescriptionBottom}
            onPress={() => {
              navigation.navigate(NavScreens.home.pricing)
            }}
          />
        </Col>
      </ScrollContainer>
    </WrapperWithBackground>
  )
}

export default PaymentOptimization
