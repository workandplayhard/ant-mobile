import React, { useState, useEffect, useCallback, createContext, useMemo } from 'react'

import { APP_TOKEN_KEY } from '@/constants'

import { getStorageValue, removeStorageValue } from '@/utils'
import { ISignInPayload, ISignUpPayload, TPCallback } from '@/types'

interface IAuthContext {
  authenticated: boolean
  onSignIn: (params: ISignInPayload, callback?: TPCallback) => void
  onSignUp: (params: ISignUpPayload, callback: TPCallback) => void
  onSignOut: () => void
}

export const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  onSignIn: () => undefined,
  onSignUp: () => undefined,
  onSignOut: () => undefined,
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  const onSignIn = useCallback((payload: ISignInPayload) => {
    if (payload.email && payload.password) {
      setAuthenticated(true)
    }
  }, [])

  const onSignUp = useCallback((payload: ISignUpPayload) => {
    if (payload.email && payload.password) {
      setAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    const getToken = async () => {
      const token = await getStorageValue(APP_TOKEN_KEY, undefined)
      if (token) {
        setAuthenticated(true)
      }
    }
    getToken()
  }, [])

  const onSignOut = useCallback(() => {
    removeStorageValue(APP_TOKEN_KEY)
    setAuthenticated(false)
  }, [])

  const value = useMemo(
    () => ({
      onSignIn,
      onSignUp,
      onSignOut,
      authenticated,
    }),
    [onSignIn, onSignUp, onSignOut, authenticated],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
