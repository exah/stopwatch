import { Box, type BoxProps } from '../box'
import { cx } from '../../utils'
import { textRecipe, type TextVariants } from './text.css'

interface TextProps extends BoxProps, TextVariants {}

export function Text({ className, align, variant, ...rest }: TextProps) {
  return (
    <Box className={cx(className, textRecipe({ align, variant }))} {...rest} />
  )
}
