import React, { useState, useEffect, useCallback, createContext, useMemo } from 'react'

import { CreateUserMutationVariables, useCreateUserMutation } from '@/apollo'

import { APP_TOKEN_KEY } from '@/constants'

import { getStorageValue, removeStorageValue, setStorageValue } from '@/utils'
import { ISignInPayload, TPCallback } from '@/types'

interface IAuthContext {
  authenticated: boolean
  onSignIn: (params: ISignInPayload, callback?: TPCallback) => void
  onSignUp: (params: CreateUserMutationVariables, callback?: TPCallback) => void
  onSignOut: () => void
  createUserLoading: boolean
}

export const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  onSignIn: () => undefined,
  onSignUp: () => undefined,
  onSignOut: () => undefined,
  createUserLoading: false,
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [createUser, { loading: createUserLoading }] = useCreateUserMutation()

  const onSignIn = useCallback((payload: ISignInPayload) => {
    if (payload.email && payload.password) {
      setAuthenticated(true)
    }
  }, [])

  const onSignUp = useCallback(
    (payload: CreateUserMutationVariables, callback?: TPCallback) => {
      createUser({
        variables: payload,
        onCompleted: (res) => {
          if (res.createUser?.success) {
            setStorageValue(APP_TOKEN_KEY, `Bearer ${res.createUser.token}`)
            setAuthenticated(true)
          }
          callback?.(res.createUser?.success)
        },
        onError: (error) => {
          callback?.(false, error.message)
        },
      })
    },
    [createUser],
  )

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
      createUserLoading,
    }),
    [onSignIn, onSignUp, onSignOut, authenticated, createUserLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
