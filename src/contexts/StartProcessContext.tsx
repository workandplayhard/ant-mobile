import React, { createContext, useMemo, useState } from 'react'

interface IStartProcess {
  modal: boolean
  onModal: (val: boolean) => void
}

export const StartProcessContext = createContext<IStartProcess>({
  modal: false,
  onModal: () => undefined,
})

export const StartProcessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modal, onModal] = useState<boolean>(true)

  const value = useMemo(
    () => ({
      modal,
      onModal,
    }),
    [modal, onModal],
  )

  return <StartProcessContext.Provider value={value}>{children}</StartProcessContext.Provider>
}
