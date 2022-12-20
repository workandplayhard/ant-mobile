import React, { useMemo } from 'react'
import { TouchableOpacity } from 'react-native'

import IconNames from '../Icon/icons'
import styles from './styles'

interface IRadioButton {
  onChange: (e: boolean) => void
  isOn: boolean
}

export const Radio: React.FC<IRadioButton> = ({ onChange, isOn }) => {
  const Icon = useMemo(
    () => (isOn ? IconNames.toggleEnabledIcon : IconNames.toggleDisabledIcon),
    [isOn],
  )

  return (
    <TouchableOpacity onPress={() => onChange(!isOn)}>
      <Icon style={styles.radio} />
    </TouchableOpacity>
  )
}
