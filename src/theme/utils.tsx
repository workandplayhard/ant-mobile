import { PixelRatio } from 'react-native'

import { IFont } from '@/types'
import { IS_IOS, SCREEN_HEIGHT, SCREEN_WIDTH, TAB_NAVIGATOR } from '@/constants'
import { FONT_MAP } from './fonts'

const guidelineBaseWidth = 390 // Screen width that is used in Figma
const guidelineBaseHeight = 844 // Screen height that is used in Figma

export const RatioH = SCREEN_HEIGHT / guidelineBaseHeight
export const RatioW = SCREEN_WIDTH / guidelineBaseWidth

export const normalizePixel = (size: number) => {
  const newSize = size * RatioW

  if (IS_IOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  }

  if (size > 12) return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2

  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

/**
 * Get font style object
 * @param {*} fontWeight: black | bold | light | medium | regular | semibold | thin | ultraLight
 * @param {*} fontSize: number
 * @param {*} color: color constant
 * @param {*} lineHeight: number | string | undefined
 * @returns font style object
 */
export const font: IFont = (fontWeight, fontSize, color, lineHeight) => {
  const fontStyle: Record<string, any> = {
    fontFamily: FONT_MAP[fontWeight],
  }
  if (fontSize !== undefined) {
    fontStyle.fontSize = normalizePixel(fontSize)
  }
  if (color !== undefined) {
    fontStyle.color = color
  }
  if (lineHeight !== undefined) {
    fontStyle.lineHeight = typeof lineHeight === 'string' ? lineHeight : normalizePixel(lineHeight)
  }

  return fontStyle
}

/**
 * Get responsive pixel value
 * @param value value comes from fig,a
 * @returns responsive value
 */
export const RW = (value: number) => RatioW * value
export const RH = (value: number) => RatioH * value

/**
 * Get route name
 * @param {*} routeName: Menu | Settings | Lorem | My account
 * @returns icon name
 */

export const getIconName = (routeName: string) => {
  let iconName

  switch (routeName) {
    case 'Menu':
      iconName = TAB_NAVIGATOR.MENU_ICON
      break
    case 'Settings':
      iconName = TAB_NAVIGATOR.SETTINGS_ICON
      break
    case 'Home':
      iconName = TAB_NAVIGATOR.BALLOON_HOT_ICON
      break
    default:
      iconName = TAB_NAVIGATOR.ACCOUNT_ICON
      break
  }

  return iconName
}
