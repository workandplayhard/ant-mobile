const PLACEHOLDER = require('@/assets/images/placeholder.png')

export const imageWithDefault = (url?: string | number, usePlaceholder = true): any => {
  if (!url) return usePlaceholder ? PLACEHOLDER : undefined
  if (typeof url === 'string') return { uri: url }
  return url
}
