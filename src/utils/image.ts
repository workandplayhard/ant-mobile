const PLACEHOLDER = require('@/assets/images/placeholder.png')

export const imageWithDefault = (url?: string, usePlaceholder = true, placeholder?: any): any => {
  if (!url) return usePlaceholder ? placeholder || PLACEHOLDER : undefined
  if (typeof url === 'string') return { uri: url }
  return url
}
