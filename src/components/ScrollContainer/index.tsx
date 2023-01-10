import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { StyleProp, ViewStyle, ScrollView } from 'react-native'

import styles from './styles'

interface IScrollContainer {
  direction?: 'vertical' | 'horizontal'
  showScrollBar?: boolean
  showHorizontalScrollBar?: boolean
  contentContainerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
  scrollEnabled?: boolean
}

interface IScrollControl {
  scrollTo?: ({ x, y, animated }: { x?: number; y?: number; animated?: boolean }) => void
}

export const ScrollContainer = forwardRef<IScrollControl, IScrollContainer>(
  (
    {
      direction = 'vertical',
      showScrollBar = true,
      showHorizontalScrollBar = true,
      contentContainerStyle = {},
      style = {},
      children,
      scrollEnabled = true,
    },
    ref,
  ) => {
    const scrollRef = useRef<ScrollView>(null)

    useImperativeHandle(
      ref,
      () => ({
        scrollTo({ x = 0, y = 0, animated = true }) {
          scrollRef.current?.scrollTo({
            animated,
            x,
            y,
          })
        },
      }),
      [],
    )

    return (
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={showScrollBar}
        showsHorizontalScrollIndicator={showHorizontalScrollBar}
        style={[styles.container, style]}
        contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
        horizontal={direction === 'horizontal'}
        ref={scrollRef}
        scrollEnabled={scrollEnabled}
      >
        {children}
      </ScrollView>
    )
  },
)
