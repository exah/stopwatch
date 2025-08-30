import { sprinkles, type Sprinkles } from '../../theme'
import { cx, extractSprinklesAndCleanupProps } from '../../utils'
import { Slot } from '../slot'

export interface BoxProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof Sprinkles>,
    Sprinkles {
  asChild?: boolean
}

export function Box({ asChild, className, ...rest }: BoxProps) {
  const [styles, attributes] = extractSprinklesAndCleanupProps(rest, sprinkles)
  const Component = asChild ? Slot : 'div'
  return (
    <Component className={cx(sprinkles(styles), className)} {...attributes} />
  )
}
