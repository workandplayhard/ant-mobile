import React from 'react'

import AvatarPlaceholder from '@/assets/images/placeholder.png'
import { RW } from '@/theme'
import { ImageView } from '../ImageView'

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
    <ImageView
      url={url}
      placeholder={placeholder ? AvatarPlaceholder : undefined}
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  )
}
