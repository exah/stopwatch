import { recipe } from '@vanilla-extract/recipes'

export const vStackRecipe = recipe({
  base: {
    display: 'grid',
    gridAutoFlow: 'row',
    gridAutoColumns: 'minmax(0, 1fr)',
    alignContent: 'start',
  },
})
