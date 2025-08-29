import { Box, type BoxProps } from '../box'
import { textRecipe, type TextVariants } from './text.css'
import { cx } from '../../utils'

interface TextProps extends BoxProps, TextVariants {}

export function Text({ className, align, variant, ...rest }: TextProps) {
  return (
    <Box className={cx(className, textRecipe({ align, variant }))} {...rest} />
  )
}
