import React from 'react'
import { Text, TextStyle, StyleProp } from 'react-native'

import styles from './styles'

interface ITextField {
  style?: StyleProp<TextStyle>
  text: string
}

export const TextField: React.FC<ITextField> = ({ style = styles.text, text }) => {
  return <Text style={style}>{text}</Text>
}
