import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Container, Gap, Icon, Row, TextField } from '@/components'
import { NavScreens, RouteParamList } from '@/navigation'
import { useApp } from '@/hooks'
import { RW } from '@/theme'

import { t } from '@/i18n'

import styles from './styles'

export const Thankyou = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const isFocused = useIsFocused()
  const { onChangeTheme } = useApp()

  useEffect(() => {
    if (!isFocused) {
      onChangeTheme({ statusBarStyle: 'light-content' })
    }
  }, [onChangeTheme, isFocused])

  return (
    <Container style={styles.background}>
      <View>
        <Row isFull style={styles.closePos}>
          <Icon
            name="thankyouCloseIcon"
            size={RW(24)}
            onPress={() => navigation.navigate(NavScreens.home.home)}
          />
        </Row>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Gap gap={61} />
          <Icon name="prayIcon" size={RW(100)} />

          <Gap gap={40} />
          <TextField text={t('thankyou')} style={styles.greetings} />

          <Gap gap={15} />
          <TextField text={t('end')} style={styles.ending} />

          <Gap gap={40} />
          <Button
            variant="primary"
            size="lg"
            text={t('backToHomePage')}
            onPress={() => navigation.navigate(NavScreens.home.paymentOptimization)}
          />
        </View>
      </View>
    </Container>
  )
}

export default Thankyou
