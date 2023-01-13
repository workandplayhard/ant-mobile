import React from 'react'
import { View } from 'react-native'

import { Col, Gap, Icon, Row, TextField } from '@/components'
import { ICost } from '@/types'
import { RW } from '@/theme'
import { t } from '@/i18n'
import { Tooltip } from '@/components/Tooltip'

import styles from './styles'

interface IPlan {
  title: string
  costs: ICost[]
}
const Plan: React.FC<IPlan> = ({ title, costs }) => {
  return (
    <View>
      <TextField text={title} style={styles.header} />
      <Row>
        <Tooltip text={t('lorem')} offset={5} pointerType={'reducing'}>
          <Icon name="questionCircleIcon" size={RW(20)} wrapperStyle={styles.questionIconPos} />
        </Tooltip>
      </Row>

      <Gap gap={40} />
      <Row style={styles.planRow}>
        {costs.map((cost, index) => (
          <Row key={index}>
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
            {index < costs.length - 1 && <Gap horizontal gap={20} />}
          </Row>
        ))}
      </Row>
    </View>
  )
}

export default Plan
