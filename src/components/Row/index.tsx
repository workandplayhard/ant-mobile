import React from 'react'
import { View, ViewStyle, StyleProp } from 'react-native'

import styles from './styles'

interface IRow {
  isFull?: boolean
  style?: StyleProp<ViewStyle>
  shouldWrap?: boolean
  children: React.ReactNode
}

export const Row: React.FC<IRow> = ({
  isFull = false,
  style = {},
  children,
  shouldWrap = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        { flexWrap: shouldWrap ? 'wrap' : 'nowrap' },
        isFull && { width: '100%' },
        style,
      ]}
    >
      {children}
    </View>
  )
}
