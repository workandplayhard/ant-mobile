import React, { useCallback, useMemo, useState } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native'

import { SCREEN_WIDTH } from '@/constants'
import { RW } from '@/theme'
import { Gap } from '../Gap'
import { ImageView } from '../ImageView'

import styles from './styles'

interface Props {
  width?: number
  urls: string[]
  height?: string | number
  paginatorStyle?: ViewStyle
  onItemPress?: () => void | undefined
}

export const Slider: React.FC<Props> = ({
  urls,
  paginatorStyle,
  width = SCREEN_WIDTH,
  onItemPress = undefined,
  height = (2 * SCREEN_WIDTH) / 3,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onSlide = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { x } = event.nativeEvent.contentOffset
      setActiveIndex(Math.round(x / width))
    },
    [width],
  )

  const Images = useMemo(() => {
    if (!urls.length) {
      return [
        <TouchableOpacity
          onPress={onItemPress}
          activeOpacity={onItemPress ? 0.75 : 1}
          style={[styles.imageContainer, { height, width }]}
        >
          <ImageView style={{ height, width, borderRadius: RW(12) }} />
        </TouchableOpacity>,
      ]
    }

    return urls.map((url, index) => (
      <TouchableOpacity
        key={index}
        onPress={onItemPress}
        activeOpacity={onItemPress ? 0.75 : 1}
        style={[styles.imageContainer, { height, width }]}
      >
        <ImageView style={{ height, width, borderRadius: RW(12) }} url={url} />
      </TouchableOpacity>
    ))
  }, [urls, height, width, onItemPress])

  return (
    <View style={[styles.container, { height, width }]}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={onSlide}
        style={styles.slider}
        scrollEventThrottle={16}
        scrollEnabled={Images.length > 1}
        showsHorizontalScrollIndicator={false}
      >
        {Images}
      </ScrollView>
      <View style={[styles.paginatorContainer, paginatorStyle]}>
        {Array.from(Array(urls.length).keys()).map((index) => (
          <React.Fragment key={index}>
            <View style={[styles.paginator, activeIndex === index && styles.active]} />
            {index < urls.length - 1 && <Gap horizontal gap={RW(9)} />}
          </React.Fragment>
        ))}
      </View>
    </View>
  )
}
