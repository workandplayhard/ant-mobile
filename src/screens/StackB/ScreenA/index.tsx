import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { t } from '@/i18n'

import Modal from '@/components/Modal'
import { Button } from '@/components'
import { RW } from '@/theme'

import styles from './styles'

const HomeScreenA: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const toogleModal = () => {
    setShowModal((prev) => !prev)
  }

  const onClose = () => {
    setShowModal(() => false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
      <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
      <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
      {/* <Modal
        isVisible={showModal}
        hasBackdrop={true}
        onClose={onClose}
        backdropColor="rgba(0,0,0,0.5)"
      >
        <View
          style={{
            width: RW(329),
            height: RW(433),
            backgroundColor: 'white',
            borderRadius: RW(20),
          }}
        >
          <Button variant="primary" text="Close" onPress={toogleModal} />
        </View>
      </Modal>
      <TouchableOpacity onPressOut={toogleModal}>
        <Button variant="primary" text="Open" />
      </TouchableOpacity> */}

      {/* <Modal isVisible={showModal} hasBackdrop={false} onClose={onClose} swipeEnabled={true}>
        <View
          style={{
            width: '100%',
            height: RW(561),
            backgroundColor: '#222126',
            borderTopEndRadius: RW(20),
            borderTopStartRadius: RW(20),
            marginTop: 'auto',
          }}
        ></View>
      </Modal>
      <TouchableOpacity onPressIn={toogleModal}>
        <Button variant="primary" text="Open" />
      </TouchableOpacity> */}

      {/* <Modal isVisible={showModal} hasBackdrop={true} onClose={onClose} swipeEnabled={true}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            marginTop: 'auto',
          }}
        >
          <Button variant="primary" text="Close" onPress={toogleModal} />
        </View>
      </Modal>
      <TouchableOpacity onPressIn={toogleModal}>
        <Button variant="primary" text="Open" />
      </TouchableOpacity> */}
      {/* 
      <Modal
        isVisible={showModal}
        hasBackdrop={true}
        onClose={onClose}
        swipeEnabled={true}
        backdropColor="white"
      >
        <View
          style={{
            width: '100%',
            height: RW(517),
            backgroundColor: '#222126',
            borderTopEndRadius: RW(20),
            borderTopStartRadius: RW(20),
            marginTop: 'auto',
          }}
        >
          <Button variant="primary" text="Close" onPress={toogleModal} />
        </View>
      </Modal>
      <TouchableOpacity onPressIn={toogleModal}>
        <Button variant="primary" text="Open" />
      </TouchableOpacity> */}
    </View>
  )
}

export default HomeScreenA
