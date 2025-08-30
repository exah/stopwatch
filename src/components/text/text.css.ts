import { recipe } from '@vanilla-extract/recipes'
import { theme } from '../../theme'

export const textRecipe = recipe({
  variants: {
    variant: {
      time: {
        fontFamily: theme.fonts['sans-serif'],
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '62px',
        lineHeight: 1.1875,
        fontFeatureSettings: "'tnum' on, 'lnum' on",
      },
      label: {
        fontFamily: theme.fonts['sans-serif'],
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: 1.1875,
        textTransform: 'uppercase',
      },
      button: {
        fontFamily: theme.fonts['sans-serif'],
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: 1,
      },
    },
    align: {
      start: { textAlign: 'start' },
      center: { textAlign: 'center' },
      end: { textAlign: 'end' },
    },
  },
})

export type TextVariants = NonNullable<Parameters<typeof textRecipe>[0]>
