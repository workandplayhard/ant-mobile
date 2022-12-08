import React from 'react'
import { Text, View } from 'react-native'

import { t } from '@/i18n'

import styles from './styles'

const HomeScreenA: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
    </View>
  )
}

export default HomeScreenA
