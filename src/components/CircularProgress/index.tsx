import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import RNCircularProgress from 'react-native-circular-progress-indicator'

import {
  RW,
  PROGRESS_ACTIVE_TEXT_COLOR,
  PROGRESS_INACTIVE_TEXT_COLOR,
  PROGRESS_ACTIVE_START_COLOR,
  PROGRESS_INACTIVE_START_COLOR,
  PROGRESS_ACTIVE_END_COLOR,
  PROGRESS_INACTIVE_END_COLOR,
  PROGRESS_INACTIVE_STROKE_COLOR,
} from '@/theme'
import { TextField } from '../TextField'

import styles from './styles'

interface Props {
  style?: StyleProp<ViewStyle>
  value: number
  valueStr: number | string
  maxValue: number
  isCurrent?: boolean
  label: string
}

export const CircularProgress: React.FC<Props> = ({
  isCurrent = false,
  style = {},
  maxValue,
  value,
  valueStr,
  label,
}) => {
  return (
    <View style={[styles.container, style]}>
      <RNCircularProgress
        value={value}
        maxValue={maxValue}
        radius={RW(70)}
        inActiveStrokeWidth={RW(10)}
        activeStrokeWidth={RW(10)}
        progressValueStyle={{
          opacity: 0,
        }}
        progressValueColor={isCurrent ? PROGRESS_ACTIVE_TEXT_COLOR : PROGRESS_INACTIVE_TEXT_COLOR}
        inActiveStrokeColor={PROGRESS_INACTIVE_STROKE_COLOR}
        activeStrokeColor={isCurrent ? PROGRESS_ACTIVE_START_COLOR : PROGRESS_INACTIVE_START_COLOR}
        activeStrokeSecondaryColor={
          isCurrent ? PROGRESS_ACTIVE_END_COLOR : PROGRESS_INACTIVE_END_COLOR
        }
      />
      <TextField
        style={{
          ...styles.progressValue,
          color: isCurrent ? PROGRESS_ACTIVE_TEXT_COLOR : PROGRESS_INACTIVE_TEXT_COLOR,
        }}
        text={valueStr}
      />
      <TextField text={label} style={styles.label} />
    </View>
  )
}
