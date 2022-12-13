import React from 'react'
import { imageWithDefault } from '@/utils/image'
import { Image } from 'react-native'

import { RW } from '@/theme'

interface IUserAvatar {
  url?: string
  placeholder?: boolean
  size?: number
}

export const UserAvatar: React.FC<IUserAvatar> = ({
  url = '',
  placeholder = true,
  size = RW(50),
}) => {
  return (
    <Image
      source={imageWithDefault(url, placeholder)}
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  )
}
