import { useContext } from 'react'

import { CustomerExpenseContext } from '@/contexts'

export const useCustomerExpense = () => useContext(CustomerExpenseContext)
