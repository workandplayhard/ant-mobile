import React from 'react'
import { TextInput as DefaultTextInput, StyleProp, TextStyle } from 'react-native'

import { TEXT_INPUT_FONT_COLOR } from '@/theme'

import styles from './styles'

interface ITextInput {
  value?: Maybe<string | number>
  disabled?: boolean
  secureTextEntry?: boolean
  placeholder?: string
  style?: StyleProp<TextStyle>
  onChange(v: string): void
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
      placeholderTextColor={TEXT_INPUT_FONT_COLOR}
      value={value?.toString() || undefined}
      onChangeText={onChange}
      editable={!disabled}
    />
  )
}
