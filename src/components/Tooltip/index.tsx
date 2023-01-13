import React from 'react'
import { View } from 'react-native'
import RNTooltip from 'rn-tooltip'

import { PRIMARY_BG_COLOR, TRANSPARENT, WHITE } from '@/theme'

import { TextField } from '../TextField'

import styles from './styles'

interface ITooltip {
  text?: string | undefined
  mode?: 'dark' | 'light'
  children: React.ReactNode
  offset?: number
}

export const Tooltip: React.FC<ITooltip> = ({ text, mode = 'light', offset = 0, children }) => {
  if (!text) return <>{children}</>

  return (
    <RNTooltip
      actionType="press"
      popover={<TextField text={text} style={[styles.text, mode === 'dark' && styles.textDark]} />}
      backgroundColor={mode === 'dark' ? WHITE : PRIMARY_BG_COLOR}
      containerStyle={styles.toolTipContainer}
      pointerColor={mode === 'dark' ? WHITE : PRIMARY_BG_COLOR}
      overlayColor={TRANSPARENT}
      height="auto"
      pointerStyle={styles.pointerPos}
    >
      <View style={{ padding: offset }}>{children}</View>
    </RNTooltip>
  )
}
