import React from 'react'
import { imageWithDefault } from '@/utils/image'
import { Image, ImageResizeMode, ImageStyle, StyleProp } from 'react-native'

interface IImageView {
  url?: string
  placeholder?: any
  size?: number
  resizeMode?: ImageResizeMode
  style: StyleProp<ImageStyle>
}

export const ImageView: React.FC<IImageView> = ({ url = '', placeholder, style, resizeMode }) => {
  return (
    <Image
      source={imageWithDefault(url, !!placeholder, placeholder)}
      style={style}
      resizeMode={resizeMode}
    />
  )
}
