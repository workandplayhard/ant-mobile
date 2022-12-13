import { imageWithDefault } from '@/utils/image'
import React from 'react'
import { Image } from 'react-native'

interface IUserAvatar {
  url?: string | number
  placeholder?: boolean
  size?: number
}

export const UserAvatar: React.FC<IUserAvatar> = ({ url = '', placeholder = true, size = 50 }) => {
  return <Image source={imageWithDefault(url, placeholder)} style={{ width: size, height: size }} />
}
