import React, { useMemo } from 'react'
import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { SvgProps } from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient'

import { Gap } from '../Gap'
import {
  BUTTON_GRADIENT_START,
  BUTTON_GRADIENT_END,
  BUTTON_DEFAULT_COLOR,
  BUTTON_DISABLED_COLOR,
  RW,
  BUTTON_SPECIAL_COLOR,
} from '@/theme'
import IconNames from '../Icon/icons'
import styles from './styles'
import { TextStyle } from 'react-native'

type TVariant = 'primary' | 'default' | 'pure' | 'special'

type TSize = 'xs' | 'sm' | 'md' | 'lg'

interface IButton extends TouchableOpacityProps {
  text?: string
  variant?: TVariant
  size?: TSize
  borderColor?: string
  wrapperStyle?: StyleProp<ViewStyle>
  buttonStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  iconStyle?: SvgProps
  iconName?: keyof typeof IconNames
  disabled?: boolean
  onPress?: () => void
}

export const Button: React.FC<IButton> = ({
  text = '',
  disabled = false,
  iconName,
  variant = 'default',
  size = 'lg',
  borderColor = 'transparent',
  onPress,
  iconStyle = {},
  textStyle = {},
  buttonStyle = {},
  wrapperStyle = {},
  ...rest
}) => {
  const IconComponent = iconName ? IconNames[iconName] : null

  const colors = useMemo(() => {
    if (disabled) {
      return [BUTTON_DISABLED_COLOR, BUTTON_DISABLED_COLOR]
    }
    if (variant === 'primary') {
      return [BUTTON_GRADIENT_START, BUTTON_GRADIENT_END]
    }
    if (variant === 'default') {
      return [BUTTON_DEFAULT_COLOR, BUTTON_DEFAULT_COLOR]
    }

    if (variant === 'special') {
      return [BUTTON_SPECIAL_COLOR, BUTTON_SPECIAL_COLOR]
    }

    if (variant === 'pure') {
      return ['transparent', 'transparent']
    }
    return []
  }, [disabled, variant])

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <TouchableOpacity onPress={onPress} style={styles.button} disabled={disabled} {...rest}>
        <LinearGradient
          colors={colors}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={[styles.background, styles[size], { borderColor }, buttonStyle]}
        >
          {!!IconComponent && <IconComponent {...iconStyle} />}
          {!!iconName && !!text && <Gap horizontal gap={RW(10)} />}
          {!!text && <Text style={[styles[`${size}Text`], textStyle]}>{text}</Text>}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
