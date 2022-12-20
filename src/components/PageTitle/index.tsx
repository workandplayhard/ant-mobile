import React from 'react'
import { StyleProp, TextStyle, View } from 'react-native'

import { TextField } from '../TextField'

import styles from './styles'
import { Col } from '../Col'
import { Gap } from '../Gap'

interface IPageTitle {
  title?: string
  subTitle?: string
  titleAlign?: 'left' | 'right' | 'center'
  subTitleAlign?: 'left' | 'right' | 'center'
}

export const PageTitle: React.FC<IPageTitle> = ({
  title,
  subTitle,
  titleAlign = 'left',
  subTitleAlign = 'left',
}) => {
  return (
    <Col style={styles.container}>
      {title && <TextField text={title} style={[styles.title, { textAlign: titleAlign }]} />}
      {subTitle && (
        <>
          <Gap horizontal={false} gap={12} />
          <TextField text={subTitle} style={[styles.subTitle, { textAlign: subTitleAlign }]} />
        </>
      )}
    </Col>
  )
}
