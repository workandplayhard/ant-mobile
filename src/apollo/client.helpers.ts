import { setContext } from '@apollo/client/link/context'
import { ErrorResponse } from '@apollo/client/link/error'
import { ServerError } from '@apollo/client/link/utils'
import { ServerParseError } from '@apollo/client/link/http'
import * as Sentry from '@sentry/react-native'

import { getStorageValue, removeStorageValue, showToast, TYPE } from '@/helpers'
import { APP_TOKEN_KEY } from '@/constants'

export function isServerError(
  obj: Error | ServerError | ServerParseError | undefined | null,
): obj is ServerError {
  return obj?.message !== undefined
}

export function isServerParseError(
  obj: Error | ServerError | ServerParseError | undefined | null,
): obj is ServerParseError {
  return obj?.message !== undefined
}

export const authLink = setContext(async (_, { headers, ...context }) => {
  try {
    const token = await getStorageValue(APP_TOKEN_KEY)
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        ...(token ? { Authorization: token } : {}),
      },
      ...context,
    }
  } catch (error) {
    return {
      headers: {
        ...headers,
        Authorization: null,
      },
      ...context,
    }
  }
})

export const onErrorCallback = (capturedError: ErrorResponse) => {
  const { graphQLErrors, operation, networkError, forward } = capturedError
  // @ts-ignore
  if (networkError && global.badNetwork) {
    // @ts-ignore
    global.badNetwork()
  } else {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        switch (err.extensions?.statusCode) {
          case 400:
            return forward(operation)
          case 401:
            removeStorageValue(APP_TOKEN_KEY)
            // showToast(err.message, TYPE.ERROR)
            // @ts-ignore
            global?.signOut()
            break
          default:
            Sentry.captureMessage(
              `[GraphQL error]: Message: ${err.message}, Operation: ${operation.operationName}`,
            )
            showToast(err.message, TYPE.ERROR)
        }
      }
    }
  }

  return forward(operation)
}
