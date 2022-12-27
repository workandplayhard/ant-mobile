import { NavScreens } from './constants'

export interface RouteParamList extends Record<keyof typeof NavScreens, any> {
  TabNavigator: undefined
  'authStack:signIn': undefined
  'authStack:signUp': undefined
  'menuStack:screenA': undefined
  'homeStack:pricing': undefined
  'homeStack:paymentOptimization': undefined
  'homeStack:termsOfUse': undefined
  'homeStack:paymentProcessOverview': undefined
  'homeStack:otherInformationSources': undefined
  'homeStack:paymentFinalization': undefined
  'homeStack:customerExpense': undefined
  'accountStack:personalDetails': undefined
  [x: string]: any
}
