import React from 'react'
import { StyleProp, ViewStyle, ScrollView, View } from 'react-native'

interface IScrollContainer {
  direction?: string
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
    <View style={style}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        style={contentContainerStyle}
        horizontal={direction === 'horizontal'}
      >
        {children}
      </ScrollView>
    </View>
  )
}
