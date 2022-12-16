import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { ViewStyle } from 'react-native'

import { IOption } from '@/types'
import { RH } from '@/theme'

import { Icon } from '../Icon'
import styles from './styles'

interface IDropdown<T> {
  data: IOption<T>[]
  placeholder?: string
  disabled?: boolean
  buttonText?: string
  onChange: (v: IOption<T>, index: number) => void
  dropDownStyle?: ViewStyle
  children: (item: IOption<T>, index: number) => React.ReactNode
}

export const Dropdown = <T,>({
  onChange,
  buttonText,
  placeholder,
  disabled,
  data,
  dropDownStyle = {},
  children,
}: IDropdown<T>) => {
  const [focused, setFocused] = useState<boolean>(false)

  return (
    <SelectDropdown
      data={data}
      disabled={disabled}
      onSelect={(item: IOption<T>, index: number) => onChange(item, index)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      buttonTextAfterSelection={() => buttonText || placeholder || ''}
      defaultButtonText={buttonText || placeholder || ''}
      buttonStyle={styles.buttonStyle}
      buttonTextStyle={styles.buttonText}
      dropdownStyle={{ ...styles.dropdownView, ...dropDownStyle }}
      rowStyle={styles.row}
      rowTextForSelection={(item) => item.label}
      renderCustomizedRowChild={(item, index) => children(item, index)}
      renderDropdownIcon={() => (
        <Icon name={focused ? 'arrowUpIcon' : 'arrowDownIcon'} size={RH(20)} />
      )}
    />
  )
}
