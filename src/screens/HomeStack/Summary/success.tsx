import React, { useCallback, useEffect, useRef } from 'react'
import { Trans } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { NavScreens, RouteParamList } from '@/navigation'

import { useApp } from '@/hooks'
import { Button, Col, Gap, Icon, Modal, Row, TextField } from '@/components'
import { MODAL_BACKDROP_COLOR, RW } from '@/theme'
import { t } from '@/i18n'

import mockData from './mockData.json'

import styles from './styles'
interface IProps {
  onEmail: (val: boolean) => void
  onSuccess: (val: boolean) => void
}

const Success: React.FC<IProps> = ({ onEmail, onSuccess }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const { isRTL } = useApp()
  const timer = useRef<any>(null)

  useEffect(
    () => () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    },
    [],
  )

  const onEmailDebounced = useCallback(() => {
    timer.current = setTimeout(() => onEmail(true), 10)
  }, [onEmail])

  const onBack = () => {
    onEmailDebounced()
    onSuccess(false)
  }

  return (
    <Modal
      modalStyle={styles.downloadModal}
      isVisible
      hasBackdrop
      backdropColor={MODAL_BACKDROP_COLOR}
      swipeEnabled
    >
      <Col style={styles.downloadWrapper}>
        <Gap gap={2} />
        <Row>
          <Icon
            name="arrowBackIcon"
            size={RW(20)}
            onPress={onBack}
            wrapperStyle={isRTL && styles.isRTL}
          />
          <TextField text={t('back')} style={styles.emailBack} onPress={onBack} />
        </Row>

        <Gap gap={28} />
        <TextField text={t('success')} style={styles.successText} />

        <Gap gap={20} />
        <Row style={styles.successRow}>
          <TextField style={styles.successProvider}>
            <Trans
              i18nKey="emailProvider"
              values={{ email: mockData.mail }}
              components={{
                tag: <TextField style={styles.successMail} />,
              }}
            />
          </TextField>
        </Row>
        <Gap gap={28} />
        <Icon name="mailIcon" size={RW(60)} wrapperStyle={styles.mailIconWrapper} />

        <Gap gap={38} />
        <Button
          variant="primary"
          size="lg"
          text={t('next')}
          onPress={() => {
            navigation.navigate(NavScreens.home.thankyou)
            onSuccess(false)
          }}
        />
        <Gap gap={30} />
      </Col>
    </Modal>
  )
}

export default Success
