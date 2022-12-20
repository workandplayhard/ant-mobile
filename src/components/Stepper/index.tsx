import React, { useMemo } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import { IStep } from '@/types'
import { Row } from '../Row'

import { Step } from './step'
import { StepLine } from './stepLine'
import styles from './styles'

interface IStepper<T = string> {
  style?: StyleProp<ViewStyle>
  steps: IStep<T>[]
  currentStep?: number
  canJumpNext?: boolean
  onChangeStep?: (s: number) => void
}

export const Stepper = <T,>({
  steps,
  currentStep = 0,
  canJumpNext = false,
  style = {},
  onChangeStep,
}: IStepper<T>) => {
  const completed = useMemo(() => {
    return 100 * (currentStep / Math.max(steps.length - 1, 1))
  }, [currentStep, steps])

  return (
    <View style={[styles.container, style]}>
      <Row style={{ justifyContent: 'space-between' }}>
        {steps.map((step, index) => (
          <Step
            key={index}
            index={index}
            step={step}
            currentStep={currentStep}
            canJumpNext={canJumpNext}
            onChangeStep={onChangeStep}
          />
        ))}
        <StepLine completed={completed} />
      </Row>
    </View>
  )
}
