import React, { createContext, useMemo, useState } from 'react'

interface IState {
  cost: boolean
  detail: boolean
  success: boolean
  tvOffer: boolean
  tvPlan: boolean
  tvSuccess: boolean
  onCost: (val: boolean) => void
  onDetail: (val: boolean) => void
  onSuccess: (val: boolean) => void
  onTVOffer: (val: boolean) => void
  onTVPlan: (val: boolean) => void
  onTVSuccess: (val: boolean) => void
}

export const ReduceCostContext = createContext<IState>({
  cost: true,
  detail: false,
  success: false,
  tvOffer: false,
  tvPlan: false,
  tvSuccess: false,
  onCost: () => undefined,
  onDetail: () => undefined,
  onSuccess: () => undefined,
  onTVOffer: () => undefined,
  onTVPlan: () => undefined,
  onTVSuccess: () => undefined,
})

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cost, onCost] = useState<boolean>(true)
  const [detail, onDetail] = useState<boolean>(false)
  const [success, onSuccess] = useState<boolean>(false)
  const [tvOffer, onTVOffer] = useState<boolean>(false)
  const [tvPlan, onTVPlan] = useState<boolean>(false)
  const [tvSuccess, onTVSuccess] = useState<boolean>(false)

  const value = useMemo(
    () => ({
      cost,
      detail,
      success,
      tvOffer,
      tvPlan,
      tvSuccess,
      onCost,
      onDetail,
      onSuccess,
      onTVOffer,
      onTVPlan,
      onTVSuccess,
    }),
    [
      cost,
      detail,
      success,
      tvOffer,
      tvPlan,
      tvSuccess,
      onCost,
      onDetail,
      onSuccess,
      onTVOffer,
      onTVPlan,
      onTVSuccess,
    ],
  )

  return <ReduceCostContext.Provider value={value}>{children}</ReduceCostContext.Provider>
}
