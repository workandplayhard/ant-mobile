import React, { createContext, useMemo, useState } from 'react'

interface ICustomer {
  enable: boolean
  onEnable: (val: boolean) => void
}

export const CustomerExpenseContext = createContext<ICustomer>({
  enable: false,
  onEnable: () => undefined,
})

export const CustomerExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enable, onEnable] = useState<boolean>(false)

  const value = useMemo(
    () => ({
      enable,
      onEnable,
    }),
    [enable, onEnable],
  )

  return <CustomerExpenseContext.Provider value={value}>{children}</CustomerExpenseContext.Provider>
}
