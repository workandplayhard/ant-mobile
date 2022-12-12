import React, { useMemo } from 'react'
import { TouchableOpacity } from 'react-native'

import IconNames from '../Icon/icons'
import styles from './styles'

interface IRadioButton {
  onChange: (e: boolean) => void
  isEnabled: boolean
}

export const Radio: React.FC<IRadioButton> = ({ onChange, isEnabled }) => {
  const Icon = useMemo(
    () => (isEnabled ? IconNames.toggleDisabledIcon : IconNames.toggleEnabledIcon),
    [isEnabled],
  )

  return (
    <TouchableOpacity onPress={() => onChange(!isEnabled)}>
      <Icon style={styles.radio} />
    </TouchableOpacity>
  )
}
