import React from 'react'
import { TextInput as DefaultTextInput, StyleProp, TextStyle } from 'react-native'

import styles from './styles'

interface ITextInput {
  onChange(v: string): void
  value?: Maybe<string | number>
  disabled?: boolean
  secureTextEntry?: boolean
  placeholder?: string
  style?: StyleProp<TextStyle>
}

export const TextInput: React.FC<ITextInput> = ({
  value,
  disabled = false,
  placeholder,
  onChange,
  secureTextEntry = false,
  style = {},
}) => {
  return (
    <DefaultTextInput
      secureTextEntry={secureTextEntry}
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor="#5E626C"
      value={value?.toString() || undefined}
      onChangeText={onChange}
      editable={disabled}
    />
  )
}
