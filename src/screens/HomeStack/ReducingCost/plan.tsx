import React from 'react'
import { View } from 'react-native'

import { Col, Gap, Icon, Row, TextField } from '@/components'
import { ICost } from '@/types'
import { RW } from '@/theme'

import styles from './styles'

interface IPlan {
  title: string
  costs: ICost[]
}
const Plan: React.FC<IPlan> = ({ title, costs }) => {
  return (
    <View>
      <TextField text={title} style={styles.header} />
      <Icon name="questionCircleIcon" size={RW(20)} />

      <Gap gap={40} />
      <Row style={styles.planRow}>
        {costs.map((cost, index) => (
          // If I change this into <View>, then it doesn't work. I don't know why this happens. Very strange~
          <>
            <View key={index}>
              <Col style={styles.planIconPos}>
                {cost.iconName && (
                  <View>
                    <Icon name={cost.iconName} wrapperStyle={styles.iconWrapper} />
                    <Gap gap={10} />
                  </View>
                )}
                <TextField text={cost.title} style={styles.planTitle} />
                <TextField text={cost.cost} style={styles.planCost} />
              </Col>
            </View>
            {index < 2 && <Gap horizontal={true} gap={40} />}
          </>
        ))}
      </Row>
    </View>
  )
}

export default Plan
