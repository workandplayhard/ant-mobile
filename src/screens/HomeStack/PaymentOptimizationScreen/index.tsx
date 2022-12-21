import React from 'react'
import { View } from 'react-native'

import { Button, Col, DateTime, Gap, Icon, Row, ScrollContainer, TextField } from '@/components'
import { DASHBOARD_ICON_COLORS, RW } from '@/theme'

import HeaderImage from '@/assets/images/img_signup_header.svg'
import P from '@/assets/images/img_p.svg'
import { t } from '@/i18n'

import mockData from './mockData.json'

import styles from './styles'

const PaymentOptimizationScreen: React.FC = () => {
  return (
    <ScrollContainer style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
      <HeaderImage style={styles.headerImage} width={RW(350)} height={RW(140)} />
      <View style={styles.saveParent}>
        <View style={styles.save}>
          <TextField text={t('saveTitle')} style={styles.saveTitle} />
          <TextField text={t('currency', { value: mockData.savePrice })} style={styles.savePrice} />

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
              <Button variant="primary" buttonStyle={styles.saveButton} iconName="arrowNextIcon" />
            </View>
          </Row>
        </View>
      </View>
      <View style={styles.header}>
        <TextField
          text={t(mockData.headerGreetings, { username: 'John' })}
          style={styles.headerGreetings}
        />
        <Gap horizontal={false} gap={5} />
        <TextField text={t('goodToSeeYouAgain')} style={styles.headerGreetingsContent} />
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
        <Button variant="primary" text={t('start')} style={styles.contentDescriptionBottom} />
      </Col>
    </ScrollContainer>
  )
}

export default PaymentOptimizationScreen
