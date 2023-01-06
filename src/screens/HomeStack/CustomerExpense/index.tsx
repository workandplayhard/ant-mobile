/* eslint-disable react/react-in-jsx-scope */
import { CustomerExpenseProvider } from '@/contexts'

import CustomerExpense from './customerExpense'

export default function ({ ...props }) {
  return (
    <CustomerExpenseProvider>
      <CustomerExpense {...props} />
    </CustomerExpenseProvider>
  )
}
