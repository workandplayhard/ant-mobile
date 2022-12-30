import React, { Ref, useEffect, useRef } from 'react'
import { StyleProp, ViewStyle, ScrollView } from 'react-native'

import styles from './styles'

interface IScrollContainer {
  direction?: 'vertical' | 'horizontal'
  showScrollBar?: boolean
  contentContainerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
}

export const ScrollContainer: React.FC<IScrollContainer> = ({
  direction = 'vertical',
  showScrollBar = true,
  contentContainerStyle = {},
  style = {},
  children,
}) => {
  const scrollRef = useRef<ScrollView>(null)

  useEffect(
    () =>
      scrollRef.current?.scrollTo({
        y: 0,
      }),
    [],
  )

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={showScrollBar}
      style={[styles.container, style]}
      contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
      horizontal={direction === 'horizontal'}
      scrollsToTop
      ref={scrollRef}
    >
      {children}
    </ScrollView>
  )
}
