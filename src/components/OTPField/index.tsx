import React from 'react'
import { Text, View } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

import { RW } from '@/theme'
import { Gap } from '../Gap'
import styles from './styles'

interface IOtpField {
  value?: string
  cellCount?: number
  setValue: (text: string) => void
  isValid?: boolean
}

export const OTPField: React.FC<IOtpField> = ({
  cellCount = 6,
  value = '',
  setValue,
  isValid = false,
}) => {
  const codeField = useBlurOnFulfill({ cellCount, value })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    setValue,
    value,
  })

  return (
    <View style={styles.container}>
      <CodeField
        {...props}
        value={value}
        ref={codeField}
        cellCount={cellCount}
        onChangeText={setValue}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={styles.row}
        returnKeyType="done"
        blurOnSubmit
        renderCell={({ index, symbol, isFocused }) => (
          <React.Fragment key={index}>
            <View
              style={[
                styles.cell,
                (isFocused || !!symbol) && styles.focusedCell,
                isValid && styles.validCell,
              ]}
            >
              <Text style={styles.cellText} onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
            {index < cellCount - 1 && <Gap horizontal gap={RW(8)} />}
          </React.Fragment>
        )}
      />
    </View>
  )
}
