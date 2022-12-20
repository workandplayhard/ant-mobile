import React from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'

import styles from './styles'

interface ITextField extends TextProps {
  text: string | number
}

export const TextField: React.FC<ITextField> = ({ style = {}, text, ...rest }) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {text}
    </Text>
  )
}
