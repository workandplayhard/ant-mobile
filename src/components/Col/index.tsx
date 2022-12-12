import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

import styles from './styles'

interface ICol {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export const Col: React.FC<ICol> = ({ style = {}, children }) => {
  return <View style={[styles.container, style]}>{children}</View>
}
