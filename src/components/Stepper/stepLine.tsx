import React from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { Row } from '../Row'
import styles from './styles'

interface Prop {
  completed: number
}

export const StepLine: React.FC<Prop> = ({ completed }) => {
  console.log('completed: >>', completed)
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(completed + '%', { duration: 1000 }),
  }))

  return (
    <Row style={styles.stepLineContainer}>
      <View style={styles.inactiveLine}>
        <Animated.View style={animatedStyle}>
          <View style={[styles.activeLine]} />
        </Animated.View>
      </View>
    </Row>
  )
}
