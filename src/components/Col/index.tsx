import React from 'react'
import { View, StyleProp, TextStyle, Text } from 'react-native'

import styles from './styles'

interface ICol {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}

export const Col: React.FC<ICol> = ({ style = {}, children }) => {
  return (
    <View>
      <Text style={[styles.container, style]}>{children}</Text>
    </View>
  )
}
