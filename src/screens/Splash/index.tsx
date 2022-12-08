import React, { useEffect, useRef, useState } from 'react'
import { View, Animated } from 'react-native'
import * as RNLocalize from 'react-native-localize'

import { APP_LANG_KEY, APP_LANGUAGES } from '@/constants'
import { getStorageValue } from '@/utils'
import { useApp } from '@/hooks'
import { TLang } from '@/types'

import styles from './styles'

interface Props {
  onLoadEnd: () => void
}

const Splash: React.FC<Props> = ({ onLoadEnd }) => {
  const { onChangeLanguage } = useApp()
  const [loaded, setLoaded] = useState<boolean>(false)

  const circle = useRef(new Animated.Value(-1000))

  useEffect(() => {
    Animated.spring(circle.current, {
      toValue: 0,
      friction: 1,
      tension: 3,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setLoaded(true)
      }
    })
  }, [])

  useEffect(() => {
    const checkLang = async () => {
      let language = await getStorageValue<TLang | undefined>(APP_LANG_KEY)

      let _isRTL = language ? language === APP_LANGUAGES.HE : undefined

      if (!language) {
        const localeData = RNLocalize.getLocales()
        const currentDeviceLang = localeData[0]?.languageCode || APP_LANGUAGES.HE
        language = currentDeviceLang === APP_LANGUAGES.EN ? APP_LANGUAGES.EN : APP_LANGUAGES.HE
        _isRTL = localeData[0]?.isRTL
      }

      onChangeLanguage({ lng: language as TLang, _isRTL, restart: false })
    }
    checkLang()
  }, [onChangeLanguage])

  useEffect(() => {
    if (loaded) {
      onLoadEnd()
    }

    return () => {
      console.log('Unmount splash screen')
    }
  }, [loaded, onLoadEnd])

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animated.View style={[styles.circle, { transform: [{ translateY: circle.current }] }]}>
          <View style={styles.inner} />
        </Animated.View>
      </View>
    </View>
  )
}

export default Splash
