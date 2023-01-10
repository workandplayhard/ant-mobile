/* eslint-disable react/react-in-jsx-scope */
import { AppProvider } from '@/contexts'

import PersonalDetails from './personalDetails'

export default function ({ ...props }) {
  return (
    <AppProvider>
      <PersonalDetails {...props} />
    </AppProvider>
  )
}
