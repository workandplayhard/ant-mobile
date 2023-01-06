/* eslint-disable react/react-in-jsx-scope */
import { ReduceCostProvider } from '@/contexts'

import ReducingCost from './reducingCost'

export default function ({ ...props }) {
  return (
    <ReduceCostProvider>
      <ReducingCost {...props} />
    </ReduceCostProvider>
  )
}
