import { hStackRecipe } from './h-stack.css'
import { cx } from '../../utils'
import { Box, type BoxProps } from '../box'

export interface HStackProps extends BoxProps {}

export function HStack({ className, ...rest }: HStackProps) {
  return <Box className={cx(hStackRecipe(), className)} {...rest} />
}
