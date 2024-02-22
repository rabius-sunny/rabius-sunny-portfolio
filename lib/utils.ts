import { twMerge } from 'tailwind-merge'

export function merge(...inputs: any) {
  return twMerge(inputs)
}
