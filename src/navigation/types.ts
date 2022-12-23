import { NavScreens } from './constants'

export interface RouteParamList extends Record<keyof typeof NavScreens, any> {
  TabNavigator: undefined
  'authStack:signIn': undefined
  'authStack:signUp': undefined
  'menuStack:screenA': undefined
  'homeStack:pricing': undefined
  'homeStack:paymentOptimization': undefined
  [x: string]: any
}
