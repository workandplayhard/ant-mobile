import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import IconNames from '../Icon/icons'

interface ICheckBox {
  onChange: (e: boolean) => void
  isChecked: boolean
}

export const CheckBox: React.FC<ICheckBox> = ({ onChange, isChecked }) => {
  const CheckedComponent = isChecked ? IconNames.checkedIcon : IconNames.unCheckedIcon

  return (
    <View>
      <TouchableOpacity onPress={() => onChange(!isChecked)}>
        <CheckedComponent width={40} height={40} />
      </TouchableOpacity>
    </View>
  )
}
