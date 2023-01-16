/* eslint-disable react/react-in-jsx-scope */
import { StartProcessProvider } from '@/contexts'

import PaymentProcessOverview from './PaymentProcessOverview'

export default function ({ ...props }) {
  return (
    <StartProcessProvider>
      <PaymentProcessOverview {...props} />
    </StartProcessProvider>
  )
}
