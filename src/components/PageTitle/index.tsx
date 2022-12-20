import React from 'react'
import { StyleProp, TextStyle, View } from 'react-native'

import { TextField } from '../TextField'

import styles from './styles'

interface IPageTitle {
  title?: string
  subTitle?: string
  titleStyle?: StyleProp<TextStyle>
  subTitleStyle?: StyleProp<TextStyle>
  titleAlign?: StyleProp<TextStyle>
  subTitleAlign?: StyleProp<TextStyle>
}

export const PageTitle: React.FC<IPageTitle> = ({
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  titleAlign = {},
  subTitleAlign = {},
}) => {
  return (
    <>
      <View style={[styles.container, titleAlign]}>
        {title && <TextField text={title} style={titleStyle} />}
      </View>
      <View style={[styles.container, subTitleAlign]}>
        {subTitle && <TextField text={subTitle} style={subTitleStyle} />}
      </View>
    </>
  )
}
