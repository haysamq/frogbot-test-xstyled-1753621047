export * from './colorModes'
export {
  withEmotionCache,
  CacheProvider,
  ThemeContext,
  Global,
  ClassNames,
  keyframes,
  ThemeProvider,
  withTheme,
} from '@emotion/react'
export * from './breakpoints'
export * from './theme'
export * from './preflight'
export * from '@xstyled/system'
export * from './create'

// Create and export default system
import { system } from '@xstyled/system'
import { createCss } from './create'

import type { XStyled } from './createStyled'
import type { X } from './createX'

const { css, styled, x, createGlobalStyle, cx, jsx } = createCss(system)
export { css, styled as default, x, createGlobalStyle, cx, jsx, XStyled, X }
