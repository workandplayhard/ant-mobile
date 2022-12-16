import React from 'react'
import { StyleProp, ViewStyle, ScrollView, View } from 'react-native'

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
    <View style={[styles.container, style]}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        style={[styles.contentContainerStyle, contentContainerStyle]}
        horizontal={direction === 'horizontal'}
      >
        {children}
      </ScrollView>
    </View>
  )
}
