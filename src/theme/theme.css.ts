import { createTheme } from '@vanilla-extract/css'
import { color } from './color'
import { radii } from './radii'
import { space } from './space'
import { stroke } from './stroke'
import { font } from './font'

export const [themeClassName, theme] = createTheme({
  color,
  space,
  radii,
  stroke,
  font,
})
