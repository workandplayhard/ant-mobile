import React, { ElementRef, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'
import { useNavigation } from '@react-navigation/native'

import { Button, Gap, PageTitle, ScrollContainer, Signature, TextField } from '@/components'
import { t } from '@/i18n'
import { WHITE } from '@/theme/colors'
import { MODALIZE_INITIAL_POS, SCREEN_HEIGHT } from '@/constants'
import { RW } from '@/theme/utils'

import mockData from './mockData.json'

import styles from './styles'
import NavHeader from '@/navigation/components/NavHeader'

const TermsOfUse = () => {
  const navigation = useNavigation()
  const modalizeRef = useRef<Modalize>(null)
  const signatureRef = useRef<ElementRef<typeof Signature>>(null)
  const [sign, setSign] = useState<string | undefined>()
  const [pos, setPos] = useState<string>('initial')

  useEffect(() => {
    modalizeRef.current?.open()
  }, [])

  return (
    <View style={{ padding: 30 }}>
      <Gap horizontal={false} gap={38} />
      <NavHeader hasBackButton={true} />

      <Gap horizontal={false} gap={17} />
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
          modalStyle={pos === 'initial' ? styles.modal : styles.modalNonBorder}
          handleStyle={styles.handle}
          closeOnOverlayTap={true}
          overlayStyle={{ backgroundColor: 'none' }}
          childrenStyle={{ backgroundColor: WHITE }}
          snapPoint={RW(560)}
          onClosed={() => setSign('')}
          onPositionChange={(position) => {
            setPos(position)
          }}
          modalHeight={SCREEN_HEIGHT}
          HeaderComponent={(<Gap horizontal={false} gap={40} />) as unknown as React.ReactNode}
        >
          <View style={styles.modalizeWrapper}>
            <Gap horizontal={false} gap={20} />
            <TextField text={t('termUse')} style={styles.modalizeTitle} />

            <Gap horizontal={false} gap={20} />
            <ScrollContainer
              style={{ maxHeight: pos === MODALIZE_INITIAL_POS ? RW(160) : RW(417) }}
            >
              <TextField text={mockData.example} style={styles.modalizeContent} />
            </ScrollContainer>

            <Gap horizontal={false} gap={30} />
            <TextField text={t('signatureStatus')} style={styles.modalizeSignature} />

            <Gap horizontal={false} gap={12} />
            <Signature ref={signatureRef} onSignComplete={(d: string) => setSign(d)} />

            <Gap horizontal={false} gap={40} />
            <Button
              variant="primary"
              size="lg"
              disabled={!sign}
              text={t('next')}
              onPress={() => {
                navigation.navigate('Pricing' as never)
              }}
            />
          </View>
        </Modalize>
      </Portal>
    </View>
  )
}

export default TermsOfUse
