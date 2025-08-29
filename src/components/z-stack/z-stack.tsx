import { zStackRecipe } from './z-stack.css'
import { cx } from '../../utils'
import { Box, type BoxProps } from '../box'

export interface ZStackProps extends BoxProps {}

export function ZStack({ className, ...rest }: ZStackProps) {
  return <Box className={cx(zStackRecipe(), className)} {...rest} />
}
