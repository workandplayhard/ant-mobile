import React from 'react'
import { Text, TextProps } from 'react-native'

import styles from './styles'

interface ITextField extends TextProps {
  text?: string | number
  children?: React.ReactNode
}

export const TextField: React.FC<ITextField> = ({ style = {}, text, children, ...rest }) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {text}
      {children}
    </Text>
  )
}
