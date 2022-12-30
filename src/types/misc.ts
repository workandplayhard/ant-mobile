import IconNames from '@/components/Icon/icons'

export type TLang = 'en' | 'he'

export interface IOption<T = string> {
  label: string
  value: T
  image?: any
  isSelected?: boolean
}

export interface IFinance {
  label: string
  isSelected?: boolean
}

export interface ICard {
  label: string
  iconName: keyof typeof IconNames
  isSelected?: boolean
  color: string
}

export interface ICost {
  title: string
  cost: string
  iconName?: keyof typeof IconNames
}

export interface IAverage {
  countDescription: string
  informationInternetSize: string
  count: number
  SMSSize: number
  callsSize: number
  isSelected: boolean
}

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

export interface IStep<T = string> {
  label?: string
  value: T
  isCompleted?: boolean
}
