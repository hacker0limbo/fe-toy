import { flatten } from './flatten'

export const concat = (array, ...values) => {
  return values.reduce((result, v) => Array.isArray(v) ? [...result, ...v] : [...result, v], [...array])
}