import React from 'react'
import { Text, View } from 'react-native'

import { t } from '@/i18n'

import styles from './styles'
import { NavHeader } from '@/navigation/components/NavHeader'

const HomeScreenA: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`StackC-ScreenA-${t('lorem')}`}</Text>
      {/* <NavHeader user={{ url: 'placeholder' }} /> */}
    </View>
  )
}

export default HomeScreenA
