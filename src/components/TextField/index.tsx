import React from 'react'
import { Text, TextProps } from 'react-native'

import styles from './styles'

interface ITextField extends TextProps {
  text: string
}

export const TextField: React.FC<ITextField> = ({ style = {}, text, ...rest }) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {text}
    </Text>
  )
}
