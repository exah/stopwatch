import { vStackRecipe } from './v-stack.css'
import { cx } from '../../utils'
import { Box, type BoxProps } from '../box'

export interface VStackProps extends BoxProps {}

export function VStack({ className, ...rest }: VStackProps) {
  return <Box className={cx(vStackRecipe(), className)} {...rest} />
}
