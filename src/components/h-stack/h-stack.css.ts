import { recipe } from '@vanilla-extract/recipes'

export const hStackRecipe = recipe({
  base: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: 'minmax(0, 1fr)',
  },
})
