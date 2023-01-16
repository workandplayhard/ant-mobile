import React, { useCallback, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import { Button, Col, Gap, Modal, OTPField, TextField } from '@/components'
import { MODAL_BACKDROP_COLOR } from '@/theme'
import { t } from '@/i18n'
import { NavScreens, RouteParamList } from '@/navigation'
import { useCustomerExpense } from '@/hooks/useCustomerExpense'

import mockData from './mockData.json'

import styles from './styles'

interface IProps {
  showModal: (val: boolean) => void
  onChangeScrollPos: () => void
}

const OTPVerification: React.FC<IProps> = ({ showModal, onChangeScrollPos }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const [code, setCode] = useState<string>('')
  const { onEnable } = useCustomerExpense()

  const onCancelModal = useCallback(() => {
    showModal(false)
  }, [showModal])

  const onHandleOTP = useCallback(() => {
    onEnable(true)
    onCancelModal()
    onChangeScrollPos()
    navigation.navigate(NavScreens.home.customerExpense)
  }, [navigation, onCancelModal, onEnable, onChangeScrollPos])

  return (
    <Modal
      modalStyle={styles.modal}
      isVisible
      hasBackdrop
      backdropColor={MODAL_BACKDROP_COLOR}
      swipeEnabled
    >
      <Col style={[styles.wrapper]}>
        <Gap gap={20} />
        <TextField text={t('OTP')} style={styles.modalTitle} />
        <Gap horizontal={false} gap={12} />
        <TextField text={mockData.modalTitleExample} style={styles.modalSubTitle} />

        <Gap gap={40} />
        <OTPField cellCount={6} value={code} setValue={setCode} isValid={code.length === 6} />

        <Gap gap={60} />
        <Button
          variant="primary"
          size="lg"
          disabled={code.length === 6 ? false : true}
          text={t('ok')}
          onPress={() => onHandleOTP()}
        />
      </Col>
    </Modal>
  )
}

export default OTPVerification
