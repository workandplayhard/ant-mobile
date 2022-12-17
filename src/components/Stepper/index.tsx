import React from 'react'
import { Text, StyleProp, View, TouchableOpacity, ViewProps } from 'react-native'

import { Icon } from '../Icon'

interface IStep {
  index: number
  label: string
  isCompleted: boolean
}

interface IStepper {
  steps: IStep[]
  currentStep?: number
  onChangeStep?: () => void
  canJumpNext?: boolean
}

export const Stepper: React.FC<IStepper> = ({ steps, currentStep, onChangeStep, canJumpNext }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {steps.map((step, index) => {
        return (
          <View>
            {step.isCompleted ? (
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Icon
                  name="checkIcon"
                  size={16}
                  wrapperStyle={{
                    width: 30,
                    height: 30,
                    backgroundColor: '#F15223',
                    borderRadius: 15,
                    alignItems: 'center',
                    paddingTop: 6,
                  }}
                />
                <View style={{ width: 66, height: 2, marginTop: 13, backgroundColor: '#F15223' }} />
              </View>
            ) : (
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: '#F4F5FC',
                    borderRadius: 15,
                    alignItems: 'center',
                    textAlign: 'center',
                    paddingTop: 6,
                    color: '#5E626C',
                  }}
                >
                  {step.label}
                </Text>
                {index < 3 && (
                  <View
                    style={{ width: 66, height: 2, marginTop: 13, backgroundColor: '#F4F5FC' }}
                  />
                )}
              </View>
            )}
          </View>
        )
      })}
    </View>
  )
}
