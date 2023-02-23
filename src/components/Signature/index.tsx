import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { StyleProp, View, ViewProps } from 'react-native'
import SignatureCapture, { SaveEventParams } from 'react-native-signature-capture'

import { TRANSPARENT, WHITE } from '@/theme'

import styles from './styles'

interface ISignature {
  style?: StyleProp<ViewProps>
  autoComplete?: boolean
  onSignComplete: (d: string) => void
  onSignStart?: () => void
  onSignInProgress?: () => void
  onSignEnd?: () => void
}

interface ISignatureControl {
  getSignature: () => void
  resetSignature: () => void
}

type TPanEVent = 'start' | 'move' | 'end'

export const Signature = forwardRef<ISignatureControl, ISignature>(
  (
    { style, autoComplete = true, onSignComplete, onSignStart, onSignInProgress, onSignEnd },
    ref,
  ) => {
    const signRef = useRef<any>(null)
    const timer = useRef<any>(null)

    const [event, setEvent] = useState<TPanEVent | null>(null)

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

    useEffect(() => {
      if (event === 'start' && timer.current) {
        clearTimeout(timer.current)
      }
      if (event === 'end' && autoComplete) {
        timer.current = setTimeout(() => {
          signRef.current?.saveImage()
          setEvent(null)
        }, 500)
      }

      return () => {
        if (timer.current) {
          clearTimeout(timer.current)
        }
      }
    }, [autoComplete, event])

    const onSave = useCallback(
      (result: SaveEventParams) => {
        onSignComplete(result.encoded)
      },
      [onSignComplete],
    )

    const onEvent = useCallback(
      (e: TPanEVent) => {
        setEvent(e)
        if (e === 'start') {
          onSignStart?.()
        } else if (e === 'move') {
          onSignInProgress?.()
        } else if (e === 'end') {
          onSignEnd?.()
        }
      },
      [onSignEnd, onSignInProgress, onSignStart],
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
          minStrokeWidth={4}
          maxStrokeWidth={4}
          backgroundColor={TRANSPARENT}
          viewMode="portrait"
          onStartShouldSetResponderCapture={() => true}
          onMoveShouldSetResponderCapture={() => true}
          onResponderStart={() => onEvent('start')}
          onResponderMove={() => onEvent('move')}
          onResponderEnd={() => onEvent('end')}
        />
      </View>
    )
  },
)
