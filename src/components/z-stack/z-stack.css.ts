import { recipe } from '@vanilla-extract/recipes'
import { globalStyle } from '@vanilla-extract/css'

export const zStackRecipe = recipe({
  base: {
    display: 'grid',
    gridTemplate: `'z-stack-item' 1fr / 1fr`,
  },
})

globalStyle(`${zStackRecipe()} > *`, {
  gridArea: 'z-stack-item',
})
