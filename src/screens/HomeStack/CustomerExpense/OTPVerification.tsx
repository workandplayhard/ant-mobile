import React, { useCallback, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import { Button, Col, Gap, Modal, OTPField, PageTitle, TextField } from '@/components'
import { MODAL_BACKDROP_COLOR } from '@/theme'
import { t } from '@/i18n'
import { NavScreens, RouteParamList } from '@/navigation'

import mockData from './mockData.json'

import styles from './styles'

interface IProps {
  showModal: (val: boolean) => void
}

const OTPVerification: React.FC<IProps> = ({ showModal }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const [code, setCode] = useState<string>('')

  const onCancelModal = useCallback(() => {
    showModal(false)
  }, [showModal])

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
        <OTPField cellCount={6} value={code} setValue={setCode} />

        <Gap gap={60} />
        <Button
          variant="primary"
          size="lg"
          disabled={code.length === 6 ? false : true}
          text={t('ok')}
          onPress={() => {
            navigation.navigate(NavScreens.home.summary)
            onCancelModal()
          }}
        />
      </Col>
    </Modal>
  )
}

export default OTPVerification
