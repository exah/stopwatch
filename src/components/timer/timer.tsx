import { formatTime } from '../../utils'
import { Text } from '../text'
import { VStack, type VStackProps } from '../v-stack'

interface TimerProps extends VStackProps {
  lap: number
  time: number
}

export function Timer({ lap, time }: TimerProps) {
  return (
    <VStack>
      <Text
        variant="label"
        style={{
          transition: 'opacity 0.25s',
          opacity: lap === 0 ? 0 : 1,
        }}
        asChild
      >
        <h3>Lap {lap}</h3>
      </Text>
      <Text variant="time" asChild>
        <p>{formatTime(time)}</p>
      </Text>
    </VStack>
  )
}
