import React from 'react'
import { TextStyle, Text, StyleProp, View } from 'react-native'

import styles from './styles'

interface IRow {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}

export const Row: React.FC<IRow> = ({ style = {}, children }) => {
  return (
    <View>
      <Text style={[styles.container, style]}>{children}</Text>
    </View>
  )
}
