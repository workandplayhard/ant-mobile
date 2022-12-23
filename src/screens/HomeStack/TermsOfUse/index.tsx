import React, { ElementRef, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Col, Gap, PageTitle, ScrollContainer, Signature, TextField } from '@/components'
import { t } from '@/i18n'
import { TRANSPARENT } from '@/theme'
import { SCREEN_HEIGHT } from '@/constants'
import NavHeader from '@/navigation/components/NavHeader'
import { NavScreens, RouteParamList } from '@/navigation'

import mockData from './mockData.json'

import styles, { modalInitialHeight } from './styles'

const TermsOfUse = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const modalizeRef = useRef<Modalize>(null)
  const signatureRef = useRef<ElementRef<typeof Signature>>(null)
  const [sign, setSign] = useState<string | undefined>()
  const [pos, setPos] = useState<'top' | 'initial'>('initial')

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
        title={t('termUseTitle')}
        titleAlign="center"
        subTitle={mockData.subTitleExample}
        subTitleAlign="center"
      />
      <Gap horizontal={false} gap={100} />
      <Portal>
        <Modalize
          ref={modalizeRef}
          alwaysOpen={modalInitialHeight}
          withHandle
          handlePosition="inside"
          modalStyle={styles.modal}
          handleStyle={[styles.handle, pos !== 'initial' && styles.handleLg]}
          closeOnOverlayTap={false}
          overlayStyle={{ backgroundColor: TRANSPARENT }}
          childrenStyle={[styles.modalChildren, pos !== 'initial' && styles.modalChildrenLg]}
          onClosed={() => setPos('initial')}
          onPositionChange={(position) => {
            setPos(position)
          }}
          modalHeight={SCREEN_HEIGHT}
        >
          <Col style={[styles.wrapper, pos !== 'initial' && styles.wrapperLg]}>
            <Gap gap={20} />
            <TextField text={t('termUse')} style={styles.modalTitle} />

            <Gap gap={20} />
            <ScrollContainer style={[pos === 'initial' && styles.scrollContainerInitial]}>
              <TextField text={mockData.example} style={styles.termsOfUse} />
            </ScrollContainer>

            <Gap gap={30} />
            <Col isFull>
              <TextField text={t('signatureStatus')} style={styles.signatureLabel} />
              <Gap gap={12} />
              <Signature ref={signatureRef} onSignComplete={(d: string) => setSign(d)} />
            </Col>

            <Gap gap={40} />
            <Button
              variant="primary"
              size="lg"
              disabled={!sign}
              text={t('next')}
              onPress={() => {
                navigation.navigate(NavScreens.home.pricing)
              }}
            />
          </Col>
        </Modalize>
      </Portal>
    </View>
  )
}

export default TermsOfUse
