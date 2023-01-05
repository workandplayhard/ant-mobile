import React from 'react'
import Tooltip from 'rn-tooltip'

import { PRIMARY_BG_COLOR, RH, RW, TRANSPARENT } from '@/theme'
import { t } from '@/i18n'

import { TextField } from '../TextField'

import styles from './styles'

interface ITooltip {
  text?: string | number
  children: React.ReactNode
}

export const CustomTooltip: React.FC<ITooltip> = ({ text = t('loremExample'), children }) => {
  return (
    <Tooltip
      popover={<TextField text={text} style={styles.text} />}
      containerStyle={styles.container}
      pointerColor={PRIMARY_BG_COLOR}
      pointerStyle={styles.pointerPos}
      overlayColor={TRANSPARENT}
      height="auto"
      width="auto"
    >
      {children}
    </Tooltip>
  )
}
