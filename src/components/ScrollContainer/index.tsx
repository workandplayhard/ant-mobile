import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { StyleProp, ViewStyle, ScrollView } from 'react-native'

import styles from './styles'

interface IScrollContainer {
  direction?: 'vertical' | 'horizontal'
  showScrollBar?: boolean
  contentContainerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
}

interface IScrollTo {
  scrollTo?: ({ x = 0, y = 0 }: { x?: number; y?: number }) => void
}

export const ScrollContainer = forwardRef<IScrollTo, IScrollContainer>(
  (
    {
      direction = 'vertical',
      showScrollBar = true,
      contentContainerStyle = {},
      style = {},
      children,
    },
    ref,
  ) => {
    const scrollRef = useRef<ScrollView>(null)

    useImperativeHandle(
      ref,
      () => ({
        scrollTo() {
          scrollRef.current?.scrollTo({
            y: 0,
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
        style={[styles.container, style]}
        contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
        horizontal={direction === 'horizontal'}
        ref={scrollRef}
      >
        {children}
      </ScrollView>
    )
  },
)
