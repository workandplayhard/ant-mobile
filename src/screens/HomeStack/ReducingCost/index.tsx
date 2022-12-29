/* eslint-disable react/react-in-jsx-scope */
import { StateProvider } from '@/contexts'

import ReducingCost from './ReducingCost'

export default function ({ ...props }) {
  return (
    <StateProvider>
      <ReducingCost {...props} />
    </StateProvider>
  )
}
