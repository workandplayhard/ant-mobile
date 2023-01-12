import React, { useCallback, useEffect, useRef } from 'react'

import { useApp } from '@/hooks'
import { Button, Col, Gap, Icon, Modal, Row, TextField, TextInput } from '@/components'
import { MODAL_BACKDROP_COLOR, RW } from '@/theme'
import { t } from '@/i18n'

import styles from './styles'

interface IProps {
  onSuccess: (val: boolean) => void
  onEmail: (val: boolean) => void
  onDownload: (val: boolean) => void
}

const Email: React.FC<IProps> = ({ onDownload, onSuccess, onEmail }) => {
  const [email, setEmail] = React.useState<string>('')
  const { isRTL } = useApp()
  const timer = useRef<any>(null)

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
  }, [])

  const onSuccessDebounced = useCallback(() => {
    timer.current = setTimeout(() => onSuccess(true), 10)
  }, [onSuccess])

  const onDoanloadDebounced = useCallback(() => {
    timer.current = setTimeout(() => onDownload(true), 10)
  }, [onDownload])

  const onBack = () => {
    onEmail(false)
    onDoanloadDebounced()
  }

  return (
    <Modal
      modalStyle={styles.downloadModal}
      isVisible={true}
      hasBackdrop={true}
      backdropColor={MODAL_BACKDROP_COLOR}
      swipeEnabled={true}
    >
      <Col style={styles.downloadWrapper}>
        <Row style={styles.arrowLeft}>
          <Icon
            name="arrowBackIcon"
            size={RW(20)}
            onPress={onBack}
            wrapperStyle={isRTL && styles.isRTL}
          />
          <TextField text={t('back')} style={styles.emailBack} onPress={onBack} />
        </Row>

        <Gap gap={28} />
        <TextField text={t('insertEmailAddress')} style={styles.emailTitle} />

        <Gap gap={30} />
        <TextInput
          value={email}
          mode="light"
          placeholder={t('emailID')}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onChange={(email: string) => setEmail(email)}
          style={styles.input}
          keyboardType="email-address"
        />

        <Gap gap={40} />
        <Button
          variant="primary"
          size="lg"
          text={t('send')}
          onPress={() => {
            onEmail(false)
            onSuccessDebounced()
          }}
        />
        <Gap gap={30} />
      </Col>
    </Modal>
  )
}

export default Email
