import { recipe } from '@vanilla-extract/recipes'
import { theme } from '../../theme'

export const rootRecipe = recipe({
  base: {
    display: 'block',
    borderRadius: theme.radii['round'],
    maxWidth: '100%',
    height: 'auto',
  },
})

export const circleRecipe = recipe({
  base: {
    transformBox: 'fill-box',
    transformOrigin: 'center',
    transform: 'rotate(-90deg)',
  },
  variants: {
    animated: {
      true: {
        transition: 'stroke-dashoffset 0.5s',
      },
    },
  },
})
