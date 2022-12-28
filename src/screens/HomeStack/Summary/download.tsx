import React from 'react'

import { Button, Col, Gap, Modal, TextField } from '@/components'
import { MODAL_BACKDROP_COLOR } from '@/theme'
import { t } from '@/i18n'

import mockData from './mockData.json'

import styles from './styles'

interface IProps {
  onDownload: (val: boolean) => void
  onEmail: (val: boolean) => void
}

const Download: React.FC<IProps> = ({ onDownload, onEmail }) => {
  return (
    <Modal
      modalStyle={styles.downloadModal}
      isVisible
      hasBackdrop
      backdropColor={MODAL_BACKDROP_COLOR}
      swipeEnabled
    >
      <Col style={styles.downloadWrapper}>
        <TextField text={mockData.downloadtitle} style={styles.downloadText} />

        <Gap gap={10} />
        <Button
          variant="pure"
          size="lg"
          iconName="whiteDownloadIcon"
          text={t('downloadPDF')}
          buttonStyle={styles.downloadBtn}
        />

        <Gap gap={20} />
        <Button
          variant="primary"
          size="lg"
          text={t('send')}
          onPress={() => {
            onDownload(false)
            onEmail(true)
          }}
        />
      </Col>
    </Modal>
  )
}

export default Download
