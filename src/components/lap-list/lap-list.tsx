import { formatTime } from '../../utils'
import { HStack } from '../h-stack'
import { Text } from '../text'
import { VStack } from '../v-stack'

interface LapListProps {
  children?: React.ReactNode
}

function LapList({ children }: LapListProps) {
  return (
    <VStack gap={8} asChild>
      <ul>{children}</ul>
    </VStack>
  )
}

interface LapListItemProps {
  lap: number
  time: number
}

function LapListItem({ lap, time }: LapListItemProps) {
  return (
    <HStack
      gap={16}
      padding={8}
      style={{
        gridAutoColumns: 'auto',
        justifyContent: 'space-between',
      }}
      asChild
    >
      <li>
        <Text variant="label" asChild>
          <span>Lap {lap}</span>
        </Text>
        <Text variant="label" asChild>
          <span>{formatTime(time)}</span>
        </Text>
      </li>
    </HStack>
  )
}

export { LapList as Root, LapListItem as Item }
