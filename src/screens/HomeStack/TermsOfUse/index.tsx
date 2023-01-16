/* eslint-disable react/react-in-jsx-scope */
import { StartProcessProvider } from '@/contexts'

import TermsOfUse from './TermsOfUse'

export default function ({ ...props }) {
  return (
    <StartProcessProvider>
      <TermsOfUse {...props} />
    </StartProcessProvider>
  )
}
