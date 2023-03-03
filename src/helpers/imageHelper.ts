import { SCREEN_WIDTH } from '@/constants'
import { Image } from 'react-native'

export const imageWithCustomDefault = (url: string, defaultImage: any): any => {
  if (!url) return defaultImage
  if (typeof url === 'string') return { uri: url }

  return url
}

// get full-screen based image dimension
export const imageDimension = (
  uri: string,
  callback: (width?: number, height?: number) => void,
) => {
  Image.getSize(
    uri,
    (_width, _height) => {
      const height = SCREEN_WIDTH * (_height / _width)

      if (callback) {
        return callback(SCREEN_WIDTH, height)
      }
      return { height, width: SCREEN_WIDTH }
    },
    (error) => {
      console.log('imageDimension() error: ', error)
      callback()
    },
  )
}
