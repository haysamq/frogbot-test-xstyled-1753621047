import { themeGetter } from '../style'
import { px, ms, deg, rpx, percent } from '../unit'
import { ITheme, Theme, ThemeNamespaceValue } from '../types'

export type Pixel = number | string
export const getPx = themeGetter<Pixel>({
  name: 'px',
  transform: (value, { props }) => {
    const rootFontSize = props?.theme?.settings?.rootFontSize ?? undefined
    const num = Number(value)
    return px(rpx(Number.isNaN(num) ? value : num, { rootFontSize }))
  },
})

export type ThemeDuration<T extends ITheme = Theme> = ThemeNamespaceValue<
  'durations',
  T
>
export type Duration<T extends ITheme = Theme> =
  | ThemeDuration<T>
  | number
  | string
export const getDuration = themeGetter<Duration>({
  name: 'duration',
  key: 'durations',
  transform: (value) => {
    const num = Number(value)
    return ms(Number.isNaN(num) ? value : num)
  },
})

export type Angle = number | string
export const getAngle = themeGetter<Angle>({
  name: 'angle',
  transform: (value) => {
    const num = Number(value)
    return deg(Number.isNaN(num) ? value : num)
  },
})

export type Percent = number | string
export const getPercent = themeGetter<Percent>({
  name: 'percent',
  compose: getPx,
  transform: percent,
})
