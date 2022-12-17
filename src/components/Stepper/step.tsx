import React, { useCallback } from 'react'
import { View, TouchableOpacity } from 'react-native'

import { IStep } from '@/types'
import { RW, RH } from '@/theme'
import { TextField } from '../TextField'
import { Gap } from '../Gap'
import { Icon } from '../Icon'
import styles from './styles'

interface Prop<T = string> {
  index: number
  step: IStep<T>
  currentStep?: number
  canJumpNext?: boolean
  onChangeStep?: (s: number) => void
}

export const Step = <T,>({
  index,
  step,
  currentStep = 0,
  canJumpNext = false,
  onChangeStep,
}: Prop<T>) => {
  const onPressStep = useCallback(() => {
    if (index === currentStep) return
    if (index > currentStep) {
      if (canJumpNext || step.isCompleted) onChangeStep?.(index)
    } else {
      onChangeStep?.(index)
    }
  }, [canJumpNext, currentStep, index, onChangeStep, step.isCompleted])

  return (
    <View style={styles.stepContainer}>
      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.step,
          currentStep === index && styles.currentStep,
          step.isCompleted && index < currentStep && styles.completedStep,
        ]}
        onPress={onPressStep}
      >
        {step.isCompleted && index < currentStep ? (
          <Icon name="checkIcon" size={RW(16)} />
        ) : (
          <TextField
            style={[styles.stepText, currentStep === index && styles.currentStepText]}
            text={index}
          />
        )}
      </TouchableOpacity>
      {!!step.label && index === currentStep && (
        <>
          <Gap gap={RH(7)} />
          <TextField style={styles.stepLabel} text={step.label} />
        </>
      )}
    </View>
  )
}
