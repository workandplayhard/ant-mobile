export type TLang = 'en' | 'he'

export type TPCallback = (...params: any[]) => void

export type TCallback = () => void

export type TFontWeight =
  | 'rw.black'
  | 'rw.bold'
  | 'rw.medium'
  | 'rw.regular'
  | 'rw.semibold'
  | 'rw.thin'
  | 'pp.black'
  | 'pp.bold'
  | 'pp.medium'
  | 'pp.regular'
  | 'pp.semibold'
  | 'pp.thin'

export interface IFont {
  (weight: TFontWeight, fontSize?: number, color?: string, lineHeight?: number | string): Record<
    string,
    any
  >
}
