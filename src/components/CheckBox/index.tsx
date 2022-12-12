import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import IconNames from '../Icon/icons'

import styles from './styles'

interface ICheckBox {
  onChange: (e: boolean) => void
  isChecked: boolean
}

export const CheckBox: React.FC<ICheckBox> = ({ onChange, isChecked }) => {
  const CheckedComponent = isChecked ? IconNames.checkedIcon : IconNames.unCheckedIcon

  return (
    <View>
      <TouchableOpacity onPress={() => onChange(!isChecked)}>
        <CheckedComponent style={styles.checkbox} />
      </TouchableOpacity>
    </View>
  )
}
