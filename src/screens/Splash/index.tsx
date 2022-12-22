import React, { useEffect, useRef, useState } from 'react'
import { View, Animated } from 'react-native'

import styles from './styles'

interface Props {
  onLoadEnd: () => void
}

const Splash: React.FC<Props> = ({ onLoadEnd }) => {
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
