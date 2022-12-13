import React from 'react'
import { imageWithDefault } from '@/utils/image'
import { Image } from 'react-native'

interface IUserAvatar {
  url?: string
  placeholder?: boolean
  size?: number
}

export const UserAvatar: React.FC<IUserAvatar> = ({ url = '', placeholder = true, size = 50 }) => {
  return (
    <Image
      source={imageWithDefault(url, placeholder)}
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  )
}
