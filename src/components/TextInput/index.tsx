import React from 'react'
import { TextInput as DefaultTextInput, StyleProp, TextStyle } from 'react-native'

import styles from './styles'

interface ITextInput {
  onChange(event: string): void
  value: string
  disabled: boolean
  secureTextEntry: boolean
  placeholder?: string
  style?: StyleProp<TextStyle>
}

export const TextInput: React.FC<ITextInput> = ({
  value,
  disabled,
  placeholder,
  onChange,
  secureTextEntry,
  style = {},
}) => {
  return (
    <DefaultTextInput
      secureTextEntry={secureTextEntry}
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor="#5E626C"
      value={value}
      onChangeText={onChange}
      editable={disabled}
    />
  )
}
