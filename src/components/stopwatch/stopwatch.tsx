import { sprinkles } from '../../theme'
import { Time } from '../../constants'
import { ProgressCircle } from '../progress-circle'
import { HStack } from '../h-stack'
import { Surface } from '../surface'
import { Timer } from '../timer'
import { VStack } from '../v-stack'
import { ZStack } from '../z-stack'
import { LapList } from '../lap-list'
import { StopwatchActions } from './stopwatch-actions'
import { useStopwatch } from './use-stopwatch'

export function Stopwatch() {
  const stopwatch = useStopwatch()
  const progress = (stopwatch.time % Time.MINUTE) / Time.MINUTE


  return (
    <Surface>
      <VStack gap={24}>
        <ZStack style={{ placeItems: 'center' }}>
          <Timer lap={stopwatch.laps.length} time={stopwatch.time} />
          <ProgressCircle
            className={sprinkles({ color: 'yellow-50' })}
            size={360}
            stroke={12}
            progress={progress}
            animated={progress === 0}
          />
        </ZStack>
        <HStack
          gap={16}
          paddingBlock={8}
          style={{ position: 'sticky', top: 0 }}
        >
          <StopwatchActions
            state={stopwatch.state}
            onAction={stopwatch.action}
          />
        </HStack>
        <LapList.Root>
          {stopwatch.laps.map((lapTime, lapIndex) => (
            <LapList.Item key={lapIndex} lap={lapIndex + 1} time={lapTime} />
          ))}
        </LapList.Root>
      </VStack>
    </Surface>
  )
}
