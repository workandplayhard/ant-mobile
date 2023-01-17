import React, { useCallback } from 'react'
import { I18nManager, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import {
  Button,
  Col,
  Gap,
  Icon,
  Modal,
  PageTitle,
  Row,
  ScrollContainer,
  TextField,
} from '@/components'
import { t } from '@/i18n'
import { TRANSPARENT } from '@/theme'
import NavHeader from '@/navigation/components/NavHeader'
import { NavScreens, RouteParamList } from '@/navigation'
import { useStartProcess } from '@/hooks'

import mockData from './mockData.json'

import styles from './styles'

const PaymentProcessOverview = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const { modal, onModal } = useStartProcess()

  const onHandleNext = useCallback(() => {
    onModal(false)
    navigation.navigate(NavScreens.home.otherInformationSources)
  }, [navigation, onModal])

  console.log('modal: ', modal)
  return (
    <View style={styles.modalizeWrapper}>
      <NavHeader hasBackButton />
      <Gap gap={17} />
      <PageTitle
        title={t('startingProcess')}
        titleAlign="center"
        subTitle={t('printingAndTypeSettingIndustry')}
        subTitleAlign="center"
      />
      <Gap gap={100} />
      {modal && (
        <Modal
          modalStyle={styles.modal}
          isVisible
          hasBackdrop
          backdropColor={TRANSPARENT}
          swipeEnabled
        >
          <Col style={styles.wrapper}>
            <Gap gap={20} />
            <TextField text={t('printingAndTypeSettingIndustry')} style={styles.modalTitle} />

            <Gap gap={20} />
            <ScrollContainer style={styles.scrollContainerInitial}>
              <TextField text={mockData.example} style={styles.progressOverview} />
            </ScrollContainer>

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
            <Button variant="primary" size="lg" text={t('next')} onPress={() => onHandleNext()} />
          </Col>
        </Modal>
      )}
    </View>
  )
}

export default PaymentProcessOverview
