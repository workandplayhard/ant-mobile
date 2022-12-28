import React from 'react'

import { Col, Row, TextField } from '@/components'

import styles from './styles'

interface ITotal {
  count: number
  countDescription: string
  content: string
}

const Total: React.FC<ITotal> = ({ count, countDescription, content }) => {
  return (
    <Row style={styles.totalRow}>
      <Col>
        <TextField text={count} style={styles.totalCount} />
        <TextField text={countDescription} style={styles.totalDescription} />
      </Col>
      <TextField text={content} style={styles.totalContent} />
    </Row>
  )
}

export default Total
