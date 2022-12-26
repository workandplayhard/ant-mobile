import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import MaskInput, { Mask } from 'react-native-mask-input'

import { TEXT_INPUT_PLACEHOLDER_DARK_COLOR, TEXT_INPUT_PLACEHOLDER_LIGHT_COLOR } from '@/theme'

import { TextField } from '../TextField'
import { Gap } from '../Gap'
import styles from './styles'

interface ITextMaskInput {
  value?: Maybe<string | number>
  mask: Mask
  disabled?: boolean
  label?: string
  placeholder?: string
  mode?: 'dark' | 'light'
  obfuscationCharacter?: string
  error?: string
  containerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<TextStyle>
  showObfuscated?: boolean
  onChange(masked: string, unmasked: string): void
}

export const TextMaskInput: React.FC<ITextMaskInput> = ({
  value,
  label,
  mask,
  disabled = false,
  placeholder,
  mode = 'dark',
  obfuscationCharacter,
  error,
  containerStyle = {},
  style = {},
  showObfuscated = false,
  onChange,
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
      <MaskInput
        value={`${value ?? ''}`}
        style={[
          styles.input,
          mode === 'dark' && styles.inputDark,
          mode === 'light' && styles.inputLight,
          isFocus && mode === 'dark' ? styles.darkFocused : styles.darkBlured,
          isFocus && mode === 'light' ? styles.lightFocused : styles.lightBlured,
          style,
        ]}
        onChangeText={onChange}
        obfuscationCharacter={obfuscationCharacter}
        showObfuscatedValue={true}
        placeholder={placeholder}
        placeholderTextColor={
          mode === 'dark' ? TEXT_INPUT_PLACEHOLDER_DARK_COLOR : TEXT_INPUT_PLACEHOLDER_LIGHT_COLOR
        }
        mask={mask}
        editable={!disabled}
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
