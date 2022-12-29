import React, { createContext, useCallback, useMemo, useState } from 'react'

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

export const StateContext = createContext<IState>({
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
  const [cost, setCost] = useState<boolean>(true)
  const [detail, setDetail] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [tvOffer, setTVOffer] = useState<boolean>(false)
  const [tvPlan, setTVPlan] = useState<boolean>(false)
  const [tvSuccess, setTVSuccess] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onCost = useCallback((cost: boolean) => {
    setCost(cost)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onDetail = useCallback((detail: boolean) => {
    setDetail(detail)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onSuccess = useCallback((success: boolean) => {
    setSuccess(success)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onTVOffer = useCallback((tvOffer: boolean) => {
    setTVOffer(tvOffer)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onTVPlan = useCallback((tvPlan: boolean) => {
    setTVPlan(tvPlan)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onTVSuccess = useCallback((tvSuccess: boolean) => {
    setTVSuccess(tvSuccess)
  }, [])

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

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
