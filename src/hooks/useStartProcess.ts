import { useContext } from 'react'

import { StartProcessContext } from '@/contexts'

export const useStartProcess = () => useContext(StartProcessContext)
