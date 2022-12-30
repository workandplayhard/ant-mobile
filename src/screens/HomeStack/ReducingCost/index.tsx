/* eslint-disable react/react-in-jsx-scope */
import { ReduceCostProvider } from '@/contexts'

import ReducingCost from './ReducingCost'

export default function ({ ...props }) {
  return (
    <ReduceCostProvider>
      <ReducingCost {...props} />
    </ReduceCostProvider>
  )
}
