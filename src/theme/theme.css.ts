import { createTheme } from '@vanilla-extract/css'
import { color } from './color'
import { radii } from './radii'
import { space } from './space'
import { fonts } from './fonts'

export const [themeClassName, theme] = createTheme({
  color,
  space,
  radii,
  fonts,
})
