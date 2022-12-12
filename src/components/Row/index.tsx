import React from 'react'
import { View, ViewStyle, StyleProp } from 'react-native'

import styles from './styles'

interface IRow {
  style?: StyleProp<ViewStyle>
  shouldWrap?: boolean
  children: React.ReactNode
}

export const Row: React.FC<IRow> = ({ style = {}, children, shouldWrap = false }) => {
  return (
    <View style={[styles.container, { flexWrap: shouldWrap ? 'wrap' : 'nowrap' }, style]}>
      {children}
    </View>
  )
}
