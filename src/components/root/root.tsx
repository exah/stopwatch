import { themeClassName } from '../../theme'
import { cx } from '../../utils'
import { VStack } from '../v-stack'
import { Stopwatch } from '../stopwatch'
import { rootStyle } from './root.css'

export function Root() {
  return (
    <VStack className={cx(themeClassName, rootStyle)}>
      <Stopwatch />
    </VStack>
  )
}
