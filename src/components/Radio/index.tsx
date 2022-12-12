import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import IconNames from '../Icon/icons'
import styles from './styles'

interface IRadioButton {
  onChange: (e: boolean) => void
  isEnabled: boolean
}

export const Radio: React.FC<IRadioButton> = ({ onChange, isEnabled }) => {
  const RadioComponent = isEnabled ? IconNames.toggleDisabledIcon : IconNames.toggleEnabledIcon

  return (
    <View>
      <TouchableOpacity onPress={() => onChange(!isEnabled)}>
        <RadioComponent style={styles.radio} />
      </TouchableOpacity>
    </View>
  )
}
