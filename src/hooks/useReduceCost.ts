import { useContext } from 'react'

import { ReduceCostContext } from '@/contexts'

export const useReduceCost = () => useContext(ReduceCostContext)
