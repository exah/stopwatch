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
    transitionProperty: 'opacity',
    transitionDuration: '0.5s',
  },
  variants: {
    animated: {
      true: {
        transitionProperty: 'stroke-dashoffset, opacity',
      },
    },
  },
})
