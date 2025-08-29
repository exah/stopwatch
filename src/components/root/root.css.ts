import { style } from '@vanilla-extract/css'
import { sprinkles } from '../../theme'

export const rootStyle = style([
  { minHeight: '100%' },
  sprinkles({
    padding: 24,
    backgroundColor: 'grey-90',
  }),
])
