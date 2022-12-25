import React, { useEffect, useRef, useState } from 'react'
import { I18nManager, View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Col, Gap, Icon, PageTitle, Row, ScrollContainer, TextField } from '@/components'
import { t } from '@/i18n'
import { TRANSPARENT } from '@/theme'
import NavHeader from '@/navigation/components/NavHeader'
import { NavScreens, RouteParamList } from '@/navigation'
import { useApp } from '@/hooks'

import mockData from './mockData.json'

import styles, { modalInitialHeight } from './styles'

const PaymentProcessOverview = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const modalizeRef = useRef<Modalize>(null)

  const onCancelModal = () => {
    modalizeRef.current?.close()
  }

  useEffect(() => {
    modalizeRef.current?.open()

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      modalizeRef.current?.close()
    }
  }, [])

  return (
    <View style={styles.wrapper}>
      <NavHeader hasBackButton />
      <Gap gap={17} />
      <PageTitle
        title={t('startingProcess')}
        titleAlign="center"
        subTitle={mockData.subTitleExample}
        subTitleAlign="center"
      />
      <Gap gap={100} />
      <Portal>
        <Modalize
          ref={modalizeRef}
          alwaysOpen={modalInitialHeight}
          withHandle
          handlePosition="inside"
          modalStyle={styles.modal}
          handleStyle={[styles.handle]}
          closeOnOverlayTap={false}
          overlayStyle={{ backgroundColor: TRANSPARENT }}
          childrenStyle={styles.modalChildren}
          modalHeight={modalInitialHeight}
        >
          <Col style={[styles.wrapper]}>
            <Gap gap={20} />
            <TextField text={mockData.contentTitleExample} style={styles.modalTitle} />

            <Gap gap={20} />
            <ScrollContainer style={styles.scrollContainerInitial}>
              <TextField text={mockData.example} style={styles.progressOverview} />

              <Gap gap={31} />

              <Row isFull style={styles.iconRow}>
                <Icon name="walletCreditCardIcon" size={40} wrapperStyle={styles.icon} />
                <Icon
                  name="nextIndicatorIcon"
                  wrapperStyle={[styles.indicator, I18nManager.isRTL && styles.isRTL]}
                />
                <Icon name="humanIcon" size={40} wrapperStyle={styles.icon} />
                <Icon
                  name="nextIndicatorIcon"
                  wrapperStyle={[styles.indicator, I18nManager.isRTL && styles.isRTL]}
                />
                <Icon name="bankIcon" size={40} wrapperStyle={styles.icon} />
              </Row>

              <Gap gap={60} />
              <Button
                variant="primary"
                size="lg"
                text={t('next')}
                onPress={() => {
                  onCancelModal()
                  navigation.navigate(NavScreens.home.otherInformationSources)
                }}
              />
            </ScrollContainer>
          </Col>
        </Modalize>
      </Portal>
    </View>
  )
}

export default PaymentProcessOverview
