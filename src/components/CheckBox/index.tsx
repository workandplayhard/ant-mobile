import React, { useMemo } from 'react'
import { TouchableOpacity, View } from 'react-native'

import IconNames from '../Icon/icons'

import styles from './styles'

interface ICheckBox {
  onChange: (e: boolean) => void
  isChecked?: boolean
}

export const CheckBox: React.FC<ICheckBox> = ({ onChange, isChecked = false }) => {
  const Icon = useMemo(
    () => (isChecked ? IconNames.checkedIcon : IconNames.unCheckedIcon),
    [isChecked],
  )

  return (
    <TouchableOpacity onPress={() => onChange(!isChecked)}>
      <Icon style={styles.checkbox} />
    </TouchableOpacity>
  )
}
