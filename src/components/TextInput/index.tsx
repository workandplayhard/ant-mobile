import React from 'react'
import { TextInput as DefaultTextInput } from 'react-native'

import styles from './styles'

interface ITextInput {
  onChange(event: string): void
  value: string
  disabled: boolean
  secureTextEntry: boolean
  placeholder?: string
}

export const TextInput: React.FC<ITextInput> = ({
  value,
  disabled,
  placeholder,
  onChange,
  secureTextEntry,
}) => {
  return (
    <DefaultTextInput
      secureTextEntry={secureTextEntry}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#5E626C"
      value={value}
      onChangeText={onChange}
      editable={disabled}
    />
  )
}
