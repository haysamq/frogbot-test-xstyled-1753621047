import { num, string, negative, getThemeValue } from '@xstyled/util'
import { CSSScalar, TransformValue } from './types'

interface PxToRemOptions {
  rootFontSize?: number
}

const round = (value: number): number => Math.round(value * 10 ** 4) / 10 ** 4

export const unit =
  (unit: string) =>
  <T extends CSSScalar>(value: T): string | T =>
    num(value) && value !== 0 ? `${value}${unit}` : value

export const ms = unit('ms')
export const px = unit('px')
export const deg = unit('deg')

const pxToRem = (
  value: number,
  { rootFontSize = 16 }: PxToRemOptions = {},
): number => round(value / rootFontSize)

export const remPx = (
  value: CSSScalar,
  options?: PxToRemOptions,
): CSSScalar => {
  const num = Number(value)
  if (Number.isNaN(num) || num === 0) return value
  return `${pxToRem(num, options)}rem`
}

export const rpx = (value: CSSScalar, options?: PxToRemOptions): CSSScalar => {
  if (!string(value) || value.length < 4) return value
  const unit = value.slice(-3)
  if (unit !== 'rpx') return value
  const n = Number(value.slice(0, value.length - 3))
  if (n === 0) return 0
  return `${pxToRem(n, options)}rem`
}

export const percent = (n: CSSScalar): CSSScalar =>
  num(n) && n !== 0 && n >= -1 && n <= 1 ? `${round(n * 100)}%` : n

export const transformNegative: TransformValue = (
  _,
  { rawValue, variants, props },
) => {
  if (string(rawValue)) {
    const neg = rawValue.startsWith('-')
    const abs = neg ? rawValue.substr(1) : rawValue
    const varVal = getThemeValue(props, abs, variants)
    const value = string(varVal) || num(varVal) ? varVal : abs
    return neg ? `-${value}` : value
  }
  if (num(rawValue)) {
    const neg = negative(rawValue)
    const abs = Math.abs(rawValue)
    const varVal = variants ? variants[abs] : undefined
    if (string(varVal)) return neg ? `-${varVal}` : varVal
    const value = num(varVal) ? varVal : abs
    return neg ? value * -1 : value
  }
  return undefined
}
