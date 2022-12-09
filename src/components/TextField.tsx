import React from 'react'
import { Text, TextStyle, StyleProp } from 'react-native'

import { t } from 'i18next'

interface ICustomizedText {
  style: StyleProp<TextStyle>
  text: string
}

export const TextField: React.FC<ICustomizedText> = ({ style, text }) => {
  return <Text style={style}>{t(text)}</Text>
}
