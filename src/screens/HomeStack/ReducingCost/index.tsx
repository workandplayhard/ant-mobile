/* eslint-disable react/react-in-jsx-scope */
import { ReduceCostProvider, AppProvider } from '@/contexts'

import ReducingCost from './reducingCost'

export default function ({ ...props }) {
  return (
    <AppProvider>
      <ReduceCostProvider>
        <ReducingCost {...props} />
      </ReduceCostProvider>
    </AppProvider>
  )
}
