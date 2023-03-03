export const errorHandling = (error: any) => {
  let e_message
  if (typeof error === 'string') e_message = error // return error
  let errorMessage = ''
  if (
    Boolean(error?.graphQLErrors?.length) &&
    Boolean(error.graphQLErrors[0].extensions?.validation)
  ) {
    Object.values(error.graphQLErrors[0].extensions?.validation).forEach(
      (errorFieldMessages: any) => {
        if (typeof errorFieldMessages === 'string') {
          if (!errorMessage.includes(errorFieldMessages)) {
            errorMessage += `${errorMessage ? '\n' : ''}${errorFieldMessages}`
          }
        } else {
          errorFieldMessages.forEach((message: string) => {
            if (!errorMessage.includes(message)) {
              errorMessage += `${errorMessage ? '\n' : ''}${message}`
            }
          })
        }
      },
    )
  }

  e_message = errorMessage || error?.message
  if (e_message.toLowerCase().indexOf('unauthenticated') >= 0) {
    // AsyncStorage.removeItem(APP_TOKEN_KEY)
    // @ts-ignore
    if (global.signOut) {
      // @ts-ignore
      global.signOut()
    }
  }
  return e_message
}
