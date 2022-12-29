import { useContext } from 'react'

import { StateContext } from '@/contexts'

export const useData = () => useContext(StateContext)
