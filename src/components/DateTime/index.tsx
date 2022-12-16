import React from 'react'
import { Text, StyleProp, TextStyle } from 'react-native'
import moment from 'moment'

import styles from './styles'

interface IDateTime {
  value: string | Date
  format?: string
  style?: StyleProp<TextStyle>
}

export const DateTime: React.FC<IDateTime> = ({ value, format = 'DD/MM/YYYY', style = {} }) => {
  return <Text style={[styles.date, style]}>{moment(new Date(value)).format(format)}</Text>
}
