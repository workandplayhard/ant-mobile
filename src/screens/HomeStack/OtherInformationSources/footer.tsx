import React from 'react'
import { I18nManager, View } from 'react-native'

import { Gap, Row, TextField } from '@/components'
import { t } from '@/i18n'

import mockData from './mockData'

import styles from './styles'

const footerListItems = [
  'loremIpsumIsSimplyDummy',
  'printingAndTypeSettingIndustry',
  'loremIpsumIsSimplyDummy',
]

const Footer = () => {
  const renderItem = (content: string, index: number) => (
    <Row key={index} style={styles.subSourceFooterList}>
      <View style={styles.circle} />
      <TextField
        text={t(content)}
        style={[
          I18nManager.isRTL && styles.subSourceFooterListItemRTL,
          styles.subSourceFooterListItem,
        ]}
      />
    </Row>
  )
  return (
    <View>
      <Gap gap={40} />
      <View style={styles.paddingHorizontalStandard}>
        <TextField text={t('loremIpsumIsSimplyDummy')} style={styles.subSourceText} />

        <Gap gap={20} />
        {footerListItems.map((item, index) => renderItem(item, index))}
      </View>
    </View>
  )
}

export default Footer
