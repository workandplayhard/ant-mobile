/* eslint-disable react/react-in-jsx-scope */
import { AppProvider } from '@/contexts'

import PaymentOptimization from './PaymentOptimization'

export default function ({ ...props }) {
  return (
    <AppProvider>
      <PaymentOptimization {...props} />
    </AppProvider>
  )
}
