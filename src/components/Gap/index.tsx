import React, { useMemo } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

import { RH, RW } from '@/theme'

interface IGap {
  horizontal?: boolean
  gap?: number
  flex?: number
}

interface StyleObject {
  [key: string]: boolean | number
}

export const Gap: React.FC<IGap> = ({ horizontal = false, gap, flex }) => {
  const style: StyleProp<ViewStyle> = useMemo(() => {
    let _styles: StyleObject = {}
    if (gap !== undefined) {
      _styles = horizontal ? { width: RW(gap), height: 0 } : { width: 0, height: RH(gap) }
    }

    if (flex !== undefined) {
      _styles.flexGrow = flex
    }

    return _styles
  }, [gap, horizontal, flex])

  return <View style={style} />
}
