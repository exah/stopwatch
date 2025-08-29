import { style } from '@vanilla-extract/css'
import { sprinkles } from '../../theme'

export const surfaceStyle = style([
  { maxWidth: 'max-content' },
  sprinkles({
    padding: 32,
    marginBlock: 8,
    marginInline: 'auto',
    borderRadius: 16,
    backgroundColor: 'background',
    color: 'foreground',
  }),
])
