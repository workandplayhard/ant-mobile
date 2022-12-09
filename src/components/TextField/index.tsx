import React from 'react'
import { Text, TextStyle, StyleProp } from 'react-native'

import styles from './styles'

interface ITextField {
  style?: StyleProp<TextStyle>
  text: string
}

export const TextField: React.FC<ITextField> = ({ style = {}, text }) => {
  return <Text style={[styles.text, style]}>{text}</Text>
}
