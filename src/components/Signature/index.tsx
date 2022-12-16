import React, { useCallback, useRef, forwardRef, useImperativeHandle } from 'react'
import { StyleProp, View, ViewProps } from 'react-native'
import SignatureCapture, { SaveEventParams } from 'react-native-signature-capture'

import { WHITE } from '@/theme'

import styles from './styles'

interface ISignature {
  style?: StyleProp<ViewProps>
  onSign: (d: string) => void
}

interface ISignatureControl {
  getSignature: () => void
  resetSignature: () => void
}

export const Signature = forwardRef<ISignatureControl, ISignature>(({ style, onSign }, ref) => {
  const signRef = useRef<any>(null)

  useImperativeHandle(
    ref,
    () => ({
      getSignature() {
        signRef.current?.saveImage()
      },
      resetSignature() {
        signRef.current?.resetImage()
      },
    }),
    [],
  )

  const onSave = useCallback(
    (result: SaveEventParams) => {
      onSign(result.encoded)
    },
    [onSign],
  )

  return (
    <View style={[styles.container, style]}>
      <SignatureCapture
        style={styles.signature}
        ref={signRef}
        onSaveEvent={onSave}
        showNativeButtons={false}
        showTitleLabel={false}
        showBorder={false}
        // @ts-ignore
        strokeColor={WHITE}
        viewMode="portrait"
      />
    </View>
  )
})
