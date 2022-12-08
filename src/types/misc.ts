export type TLang = 'en' | 'he'

export type TPCallback = (...params: any[]) => void

export type TCallback = () => void

export type TFontWeight = 'black' | 'bold' | 'light' | 'medium' | 'regular' | 'semibold' | 'thin'

export interface IFont {
  (weight: TFontWeight, fontSize?: number, color?: string, lineHeight?: number | string): Record<
    string,
    any
  >
}
