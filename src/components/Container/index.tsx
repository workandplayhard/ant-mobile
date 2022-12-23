import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import styles from './styles'

interface IContainer {
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
  loading?: boolean
}

export const Container: React.FC<IContainer> = ({ style = {}, children, loading }) => {
  return <View style={[styles.container, style]}>{children}</View>
}
