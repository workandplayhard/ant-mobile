import React from 'react'
import { View } from 'react-native'

import { Row } from '../Row'
import styles from './styles'

interface Prop {
  completed: number
}

export const StepLine: React.FC<Prop> = ({ completed }) => {
  return (
    <Row style={styles.stepLineContainer}>
      <View style={styles.inactiveLine}>
        <View style={[styles.activeLine, { width: `${completed}%` }]} />
      </View>
    </Row>
  )
}
