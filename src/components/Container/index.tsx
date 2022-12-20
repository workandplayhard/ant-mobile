import React from 'react'
import { View } from 'react-native'

import styles from './styles'

interface IContainer {
  children: React.ReactNode
  loading?: boolean
}

export const Container: React.FC<IContainer> = ({ children, loading }) => {
  return <View style={styles.container}>{children}</View>
}
