import { formatTime } from '../../utils'
import { HStack } from '../h-stack'
import { Text } from '../text'
import { VStack } from '../v-stack'

interface LapListProps extends React.HTMLAttributes<HTMLUListElement> {}

function LapList(props: LapListProps) {
  return (
    <VStack gap={8} asChild>
      <ul {...props} />
    </VStack>
  )
}

interface LapListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  lap: number
  time: number
}

function LapListItem({ lap, time, ...rest }: LapListItemProps) {
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
      <li {...rest}>
        <Text variant="label" asChild>
          <span>
            Lap {lap}
            <span style={{ opacity: 0 }}>:&nbsp;</span>
          </span>
        </Text>
        <Text variant="label" asChild>
          <span>{formatTime(time)}</span>
        </Text>
      </li>
    </HStack>
  )
}

export { LapList as Root, LapListItem as Item }
