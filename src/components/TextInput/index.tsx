import React from 'react'
import { View, TextInput as DefaultTextInput, StyleProp, ViewStyle, TextStyle } from 'react-native'

import { TEXT_INPUT_PLACEHOLDER_DARK_COLOR, TEXT_INPUT_PLACEHOLDER_LIGHT_COLOR } from '@/theme'

import { TextField } from '../TextField'
import { Gap } from '../Gap'
import styles from './styles'

interface ITextInput {
  value?: Maybe<string | number>
  disabled?: boolean
  label?: string
  error?: string
  secureTextEntry?: boolean
  placeholder?: string
  containerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<TextStyle>
  mode?: 'dark' | 'light'
  keyboardType?: 'default' | 'email-address'
  onChange(v: string): void
}

export const TextInput: React.FC<ITextInput> = ({
  value,
  disabled = false,
  placeholder,
  label,
  error,
  mode = 'dark',
  secureTextEntry = false,
  containerStyle = {},
  style = {},
  onChange,
  keyboardType = 'default',
}) => {
  const [isFocus, setIsFocus] = React.useState<boolean>(false)

  return (
    <View style={[styles.container, containerStyle]}>
      {!!label && (
        <>
          <TextField text={label} style={[styles.label, mode === 'dark' && styles.labelDark]} />
          <Gap gap={5} />
        </>
      )}
      <DefaultTextInput
        secureTextEntry={secureTextEntry}
        style={[
          styles.input,
          mode === 'dark' && styles.inputDark,
          mode === 'light' && styles.inputLight,
          isFocus && mode === 'dark' ? styles.darkFocused : styles.darkBlured,
          isFocus && mode === 'light' ? styles.lightFocused : styles.lightBlured,
          style,
        ]}
        placeholder={placeholder}
        placeholderTextColor={
          mode === 'dark' ? TEXT_INPUT_PLACEHOLDER_DARK_COLOR : TEXT_INPUT_PLACEHOLDER_LIGHT_COLOR
        }
        value={`${value ?? ''}`}
        onChangeText={onChange}
        editable={!disabled}
        keyboardType={keyboardType}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {!!error && (
        <>
          <TextField text={error} style={styles.error} />
          <Gap gap={3} />
        </>
      )}
    </View>
  )
}
