import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

import styles from './styles'

interface ICol {
  isFull?: boolean
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
}

export const Col: React.FC<ICol> = ({ isFull = false, style = {}, children }) => {
  return <View style={[styles.container, isFull && { width: '100%' }, style]}>{children}</View>
}
