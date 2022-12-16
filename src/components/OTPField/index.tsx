import React from 'react'
import { Text, View } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

import styles from './styles'

interface OTPCodeProps {
  value?: string
  isRTL?: boolean
  cellCount?: number
  setValue: (text: string) => void
}

const OTPField: React.FC<OTPCodeProps> = ({
  cellCount = 5,
  value = '',
  setValue,
  isRTL = false,
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
        returnKeyType="done"
        cellCount={cellCount}
        onChangeText={setValue}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={[styles.row, isRTL && styles.rtlRow]}
        renderCell={({ index, symbol, isFocused }) => (
          <View key={index} style={styles.cell}>
            <Text style={styles.cellText} onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  )
}

export default OTPField
