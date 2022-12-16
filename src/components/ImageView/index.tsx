import React from 'react'
import { imageWithDefault } from '@/utils/image'
import { Image, ImageStyle, StyleProp } from 'react-native'

interface IImageView {
  url?: string
  placeholder?: any
  size?: number
  style: StyleProp<ImageStyle>
}

export const ImageView: React.FC<IImageView> = ({ url = '', placeholder, style }) => {
  return <Image source={imageWithDefault(url, !!placeholder, placeholder)} style={style} />
}
