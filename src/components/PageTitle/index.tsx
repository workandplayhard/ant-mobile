import React from 'react'

import { TextField } from '../TextField'
import { Col } from '../Col'
import { Gap } from '../Gap'

import styles from './styles'

interface IPageTitle {
  title?: string
  subTitle?: string
  titleAlign?: 'left' | 'right' | 'center'
  subTitleAlign?: 'left' | 'right' | 'center'
  mode: 'dark' | 'light'
}

export const PageTitle: React.FC<IPageTitle> = ({
  title,
  subTitle,
  titleAlign = 'left',
  subTitleAlign = 'left',
  mode = 'light',
}) => {
  return (
    <Col style={styles.container}>
      {!!title && (
        <TextField
          text={title}
          style={[
            mode === 'light' ? styles.lightTitle : styles.darkTitle,
            { textAlign: titleAlign },
          ]}
        />
      )}
      {!!subTitle && (
        <>
          <Gap horizontal={false} gap={12} />
          <TextField
            text={subTitle}
            style={[
              mode === 'light' ? styles.lightSubTitle : styles.darkSubTitle,
              { textAlign: subTitleAlign },
            ]}
          />
        </>
      )}
    </Col>
  )
}
