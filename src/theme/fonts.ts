import { TFontWeight } from '@/types'

export const FONT_RALEWAY_BLACK = 'Raleway-Black'
export const FONT_RALEWAY_BOLD = 'Raleway-Bold'
export const FONT_RALEWAY_LIGHT = 'Raleway-Light'
export const FONT_RALEWAY_MEDIUM = 'Raleway-Medium'
export const FONT_RALEWAY_REGULAR = 'Raleway-Regular'
export const FONT_RALEWAY_SEMIBOLD = 'Raleway-Semibold'
export const FONT_RALEWAY_THIN = 'Raleway-Thin'

export const FONT_MAP: Record<TFontWeight, string> = {
  black: FONT_RALEWAY_BLACK,
  bold: FONT_RALEWAY_BOLD,
  light: FONT_RALEWAY_LIGHT,
  medium: FONT_RALEWAY_MEDIUM,
  regular: FONT_RALEWAY_REGULAR,
  semibold: FONT_RALEWAY_SEMIBOLD,
  thin: FONT_RALEWAY_THIN,
}
