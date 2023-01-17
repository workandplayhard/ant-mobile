import React from 'react'
import { View } from 'react-native'

import { Button, Col, Gap, Icon, Row, TextField } from '@/components'
import { t } from '@/i18n'

import mockData from './mockData.json'

import styles from './styles'

const Catagory = () => {
  return (
    <View style={styles.catagoryContainer}>
      <Row style={styles.catagoryRow}>
        <View>
          <Row>
            <Icon name="blackTVIcon" wrapperStyle={styles.iconWrapper} />
            <Col style={styles.catagoryPos}>
              <TextField text={t('SMS')} style={styles.catagoryTitle} />
              <TextField text={mockData.typeContent} style={styles.catagoryContent} />
            </Col>
          </Row>
        </View>
        <Col style={styles.catagoryColEnd}>
          <TextField text={mockData.count_4} style={styles.catagoryResultTitle} />
          <TextField text={t('reducingLorem')} style={styles.catagoryResultContent} />
        </Col>
      </Row>

      <Gap gap={20} />
      <View style={styles.line} />

      <Gap gap={20} />
      <TextField text={t('catagoryResult')} style={styles.catagoryResult} />

      <Gap gap={20} />
      <Button disabled size="md" text={t('backCatagory')} />
    </View>
  )
}

export default Catagory
