import React, { useCallback } from 'react'

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

  const timeoutSuccess = useCallback(() => {
    setTimeout(() => onSuccess(true), 1)
  }, [onSuccess])

  const timeoutBack = useCallback(() => {
    setTimeout(() => onDownload(true), 1)
  }, [onDownload])

  const onBack = () => {
    onEmail(false)
    timeoutBack()
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
          // containerStyle={styles.emailPlaceholder}
          keyboardType="email-address"
        />

        <Gap gap={40} />
        <Button
          variant="primary"
          size="lg"
          text={t('send')}
          onPress={() => {
            onEmail(false)
            timeoutSuccess()
          }}
        />
        <Gap gap={30} />
      </Col>
    </Modal>
  )
}

export default Email
