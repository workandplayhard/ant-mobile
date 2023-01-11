import React, { useCallback, useEffect, useRef } from 'react'

import { Button, Col, Gap, Icon, Modal, Row, TextField } from '@/components'
import { MODAL_BACKDROP_COLOR } from '@/theme'
import { t } from '@/i18n'

import mockData from './mockData.json'

import styles from './styles'

interface IProps {
  showModal: (val: boolean) => void
  onDownload: (val: boolean) => void
}

const Document: React.FC<IProps> = ({ showModal, onDownload }) => {
  const timer = useRef<any>(null)

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
  }, [])

  const onDoanloadDebounced = useCallback(() => {
    timer.current = setTimeout(() => onDownload(true), 10)
  }, [onDownload])

  const onCancelModal = useCallback(() => {
    showModal(false)
    onDoanloadDebounced()
  }, [showModal, onDoanloadDebounced])

  return (
    <Modal
      modalStyle={styles.documentModal}
      isVisible
      hasBackdrop
      backdropColor={MODAL_BACKDROP_COLOR}
      swipeEnabled
    >
      <Col style={styles.wrapper}>
        <Gap gap={20} />
        <TextField text={mockData.documentModalTitle} style={styles.modalTitle} />

        <Gap gap={29} />
        <Row style={styles.documentRow}>
          <Col style={styles.documentIconPos}>
            <Icon name="ringIcon" wrapperStyle={styles.iconWrapper} />
            <TextField text={mockData.callsSize} style={styles.documentIconText} />
          </Col>
          <Col style={styles.documentIconsAlign}>
            <Icon name="blackCarIcon" wrapperStyle={styles.iconWrapper} />
            <TextField text={mockData.callsSize} style={styles.documentIconText} />
          </Col>
        </Row>

        <Gap gap={41} />
        <TextField text={t('documentContent')} style={styles.documentContent} />

        <Gap gap={30} />

        <Button
          variant="pure"
          size="lg"
          text={t('goBack')}
          buttonStyle={styles.documentBtnBorder}
          textStyle={styles.documentText}
          onPress={() => onCancelModal()}
        />

        <Gap gap={21} />
        <Button
          variant="primary"
          size="lg"
          text={t('continue')}
          onPress={() => {
            onCancelModal()
          }}
        />
        <Gap gap={30} />
      </Col>
    </Modal>
  )
}

export default Document
