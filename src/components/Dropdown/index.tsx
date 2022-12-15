import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { Text, Image } from 'react-native'

import { Row } from '../Row'
import { CheckBox } from '../CheckBox'

import styles from './styles'

interface IDropdown {
  onChange: (e: boolean) => void
  value: string
  renderItem: object[]
}

export const Dropdown: React.FC<IDropdown> = ({ onChange, value, renderItem }) => {
  return (
    <SelectDropdown
      data={renderItem}
      onSelect={(selectedItem, index) => {
        selectedItem.isChecked = !selectedItem.isChecked
        return selectedItem.title
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem
      }}
      defaultButtonText={value}
      buttonTextStyle={{ color: '#5E626C', textAlign: 'left' }}
      dropdownStyle={styles.dropdownStyles}
      rowStyle={styles.rowStyle}
      buttonStyle={styles.buttonStyle}
      rowTextForSelection={(item, index) => {
        return item
      }}
      renderCustomizedRowChild={(item, index) => {
        return (
          <Row style={{ justifyContent: 'space-between' }}>
            <Image source={item.image} style={{ width: 30, height: 30 }} />
            <Text style={styles.renderText}>{item.title}</Text>
            <CheckBox onChange={onChange} isChecked={item.isChecked} />
          </Row>
        )
      }}
      renderCustomizedButtonChild={(selectedItem, index) => {
        return <Text>{selectedItem ? selectedItem.title : 'Select'}</Text>
      }}
    />
  )
}
