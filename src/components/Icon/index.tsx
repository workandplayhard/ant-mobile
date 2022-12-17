import { RW } from '@/theme'
import React from 'react'
import { StyleProp, View, TouchableOpacity, ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'

import IconNames from './icons'
import styles from './styles'

interface IIcon {
  name: keyof typeof IconNames
  size?: number
  wrapperStyle?: StyleProp<ViewStyle>
  iconStyle?: SvgProps
  badgeColor?: string
  onPress?: () => void
}

export const Icon: React.FC<IIcon> = ({
  name,
  size = RW(30),
  wrapperStyle = {},
  iconStyle = {},
  badgeColor,
  onPress,
}) => {
  const IconComponent = IconNames[name]

  if (!IconComponent) return null

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {!!badgeColor && <View style={[styles.badge, { backgroundColor: badgeColor }]} />}
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          <IconComponent width={size} height={size} {...iconStyle} />
        </TouchableOpacity>
      ) : (
        <View>
          <IconComponent width={size} height={size} {...iconStyle} />
        </View>
      )}
    </View>
  )
}
