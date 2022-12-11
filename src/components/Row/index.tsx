import React from 'react'
import { StyleProp, TextStyle, Text } from 'react-native'

import styles from './styles'

interface IRow {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}

export const Row: React.FC<IRow> = ({ style = {}, children }) => {
  return <Text style={[styles.container, style]}>{children}</Text>
}
