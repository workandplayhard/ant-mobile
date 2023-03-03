import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import { createUploadLink } from 'apollo-upload-client'
import { SentryLink } from 'apollo-link-sentry'
import * as Sentry from '@sentry/react-native'

import { SERVER_ENDPOINT } from '@/constants'
import { authLink, onErrorCallback } from './client.helpers'
import typePolicies from './typePolicies'

const sentryLink = new SentryLink({
  setFingerprint: false,
  setTransaction: false,
  attachBreadcrumbs: {
    includeError: true,
    includeVariables: true,
    includeQuery: true,
  },
})

// Custom Tracing for Sentry.
const transactionStartLink = new ApolloLink((operation, forward) => {
  let transaction = Sentry?.getCurrentHub()?.getScope()?.getTransaction()
  // If we don't get a transaction to attach, we create one.
  if (transaction) {
    transaction = Sentry.startTransaction({ name: operation.operationName })
    operation.setContext({ transaction })
  }
  const span = transaction?.startChild({
    op: 'graphql',
    description: operation.operationName,
    data: { variables: operation.variables },
  })
  operation.setContext({ span })
  return forward(operation)
})

const logTimeLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((data) => {
    const { span, transaction } = operation.getContext()
    span?.finish()
    transaction?.finish()
    return data
  })
})

const linkTimer = transactionStartLink.concat(logTimeLink)

const httpLink = createUploadLink({ uri: `${SERVER_ENDPOINT}/api` })

const errorLink = onError(onErrorCallback)

const retryLink = new RetryLink()

const link = ApolloLink.from([sentryLink, linkTimer, authLink, retryLink, errorLink, httpLink])

export const client = new ApolloClient({
  cache: new InMemoryCache({ typePolicies }),
  connectToDevTools: true,
  link,
})

export default client
