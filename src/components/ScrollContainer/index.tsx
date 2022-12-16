import React from 'react'
import { StyleProp, ViewStyle, ScrollView } from 'react-native'

import styles from './styles'

interface IScrollContainer {
  direction?: 'vertical' | 'horizontal'
  contentContainerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
}

export const ScrollContainer: React.FC<IScrollContainer> = ({
  direction = 'vertical',
  contentContainerStyle = {},
  style = {},
  children,
}) => {
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      style={[styles.container, style]}
      contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
      horizontal={direction === 'horizontal'}
    >
      {children}
    </ScrollView>
  )
}
