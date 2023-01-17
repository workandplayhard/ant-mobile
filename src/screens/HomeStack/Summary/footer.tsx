import React from 'react'
import { View } from 'react-native'

import { Gap, Row, TextField } from '@/components'
import { t } from '@/i18n'

import mockData from './mockData.json'

import styles from './styles'

const Footer = () => {
  return (
    <Row style={styles.footerRow}>
      <TextField text={t('totalAmounth')} style={styles.totalAmounth} />
      <View>
        <Row style={styles.totalAmounthPos}>
          <TextField text={mockData.count_5} style={styles.totalAmounthCount} />
          <Gap horizontal={true} gap={5} />
          <TextField text={t('reducingLorem')} style={styles.totalAmounthText} />
        </Row>
      </View>
    </Row>
  )
}

export default Footer
