import React from 'react'

import { Col, Icon, Row, TextField } from '@/components'
import iconNames from '@/components/Icon/icons'

import styles from './styles'

interface IType {
  iconName: keyof typeof iconNames
  typeTitle?: string
  typeContent?: string
}

const Type: React.FC<IType> = ({ iconName, typeTitle, typeContent }) => {
  return (
    <Row>
      <Icon name={iconName} wrapperStyle={styles.iconWrapper} />
      <Col style={styles.totalCol}>
        <TextField text={typeTitle} style={styles.totalTitle} />
        <TextField text={typeContent} style={styles.totalContent} />
      </Col>
    </Row>
  )
}

export default Type
