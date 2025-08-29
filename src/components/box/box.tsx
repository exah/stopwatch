import { sprinkles, type Sprinkles } from '../../theme'
import { cx } from '../../utils'
import { Slot } from '../slot'

function extractSprinkles(props: Sprinkles): [Sprinkles, BoxProps] {
  const styles: Sprinkles = {}

  for (const key of sprinkles.properties) {
    // Not using styles[key] = props[key] due to mixed and strict signature of props
    // Means we cannot assign color properties to spacing ones, as we can't (easily) verify key value pair, but we are sure here it's valid
    Object.assign(styles, { [key]: props[key] })
    delete props[key]
  }

  return [styles, props]
}

export interface BoxProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof Sprinkles>,
    Sprinkles {
  asChild?: boolean
}

export function Box({ asChild, className, ...rest }: BoxProps) {
  const [styles, attributes] = extractSprinkles(rest)
  const Component = asChild ? Slot : 'div'
  return (
    <Component className={cx(sprinkles(styles), className)} {...attributes} />
  )
}
