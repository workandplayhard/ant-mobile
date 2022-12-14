import React, { useCallback } from 'react'
import { View, ViewStyle } from 'react-native'
import { Portal } from 'react-native-portalize'
import BAModal from 'react-native-modal'

import { SCREEN_HEIGHT } from '@/constants'

import styles from './styles'

interface ModalProps {
  isVisible: boolean
  overlayColor?: string
  hasBackdrop?: boolean
  backdropColor?: string
  swipeEnabled?: boolean
  modalStyle?: ViewStyle
  onClose?: () => void
  children: React.ReactNode
  closeOnOverlayTap?: boolean
}

const Modal: React.FC<ModalProps> = ({
  children,
  modalStyle,
  isVisible = false,
  hasBackdrop = false,
  swipeEnabled = true,
  backdropColor,
  onClose = () => null,
  closeOnOverlayTap = true,
}) => {
  const onBackdropPressed = useCallback(() => {
    if (closeOnOverlayTap) onClose()
  }, [closeOnOverlayTap, onClose])

  return (
    <Portal>
      <View style={[styles.wrapper]}>
        <BAModal
          isVisible={isVisible}
          statusBarTranslucent
          style={[styles.modal, modalStyle]}
          hasBackdrop={hasBackdrop}
          backdropColor={backdropColor}
          onSwipeComplete={onClose}
          animationIn="fadeIn"
          animationOut="fadeOut"
          deviceHeight={SCREEN_HEIGHT + 100}
          onBackdropPress={onBackdropPressed}
          swipeDirection={swipeEnabled ? ['down'] : undefined}
          swipeThreshold={200}
        >
          {children}
        </BAModal>
      </View>
    </Portal>
  )
}

export default Modal
