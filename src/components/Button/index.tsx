import React from 'react'
import { View, Text, ViewStyle, StyleProp, TouchableOpacity } from 'react-native'
import { SvgProps } from 'react-native-svg'

import IconNames from '../Icon/icons'
import styles from './styles'

interface IButton {
  text?: string
  wrapperStyle?: StyleProp<ViewStyle>
  buttonStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<ViewStyle>
  iconStyle?: SvgProps
  iconName?: keyof typeof IconNames
  disabled?: boolean
  onClick?: () => void
}

export const Button: React.FC<IButton> = ({
  text = '',
  disabled = false,
  iconName,
  onClick,
  iconStyle = {},
  textStyle = {},
  buttonStyle = {},
  wrapperStyle = {},
}) => {
  const IconComponent = iconName ? IconNames[iconName] : null

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <TouchableOpacity
        onPress={onClick}
        style={[styles.buttonStyle, buttonStyle]}
        disabled={disabled}
      >
        {!!IconComponent && <IconComponent {...iconStyle} />}
        {!!text && <Text style={textStyle}>{text}</Text>}
      </TouchableOpacity>
    </View>
  )
}
