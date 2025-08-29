import { recipe } from '@vanilla-extract/recipes'
import { theme } from '../../theme'

const disabled = {
  backgroundColor: theme.color['grey-90'],
  color: theme.color['grey-50'],
  cursor: 'not-allowed',
}

export const buttonRecipe = recipe({
  base: {
    appearance: 'none',
    border: 'none',
    background: 'none',
    borderRadius: theme.radii[8],
    paddingInline: theme.space[16],
    paddingBlock: theme.space[12],
    cursor: 'pointer',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: theme.color['yellow-50'],
        color: theme.color['yellow-10'],
        ':disabled': disabled,
      },
      secondary: {
        backgroundColor: theme.color['grey-90'],
        color: theme.color['foreground'],
        ':disabled': disabled,
      },
      distractive: {
        backgroundColor: theme.color['orange-50'],
        color: theme.color['orange-10'],
        ':disabled': disabled,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonVariants = NonNullable<Parameters<typeof buttonRecipe>[0]>
