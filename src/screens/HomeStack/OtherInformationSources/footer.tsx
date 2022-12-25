import React from 'react'
import { I18nManager, View } from 'react-native'

import { Gap, Row, TextField } from '@/components'

import mockData from './mockData'

import styles from './styles'

const Footer = () => {
  const itemDisplay = (content: string) => (
    <Row style={styles.subSourceFooterList}>
      <View style={styles.circle} />
      <TextField
        text={content}
        style={[
          I18nManager.isRTL && styles.subSourceFooterListItemRTL,
          styles.subSourceFooterListItem,
        ]}
      />
    </Row>
  )
  return (
    <>
      <Gap gap={40} />
      <View style={styles.paddingHorizontalStandard}>
        <TextField text={mockData.data.headingExample} style={styles.subSourceText} />

        <Gap gap={20} />
        {mockData.data.footerListItems.map((item) => itemDisplay(item))}
      </View>
    </>
  )
}

export default Footer
