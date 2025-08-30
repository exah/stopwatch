import { useState, useRef, useEffect, useCallback } from 'react'
import { sprinkles } from '../../theme'
import { formatTime } from '../../utils'
import { Time } from '../../constants'
import { Button } from '../button'
import { ProgressCircle } from '../progress-circle'
import { HStack } from '../h-stack'
import { Surface } from '../surface'
import { Text } from '../text'
import { Timer } from '../timer'
import { VStack } from '../v-stack'
import { ZStack } from '../z-stack'

export function Stopwatch() {
  const [state, setState] = useState<'idle' | 'running' | 'stopped'>('idle')
  const [elapsed, setElapsed] = useState(0)
  const [laps, setLaps] = useState<number[]>([])
  const timeRef = useRef<number>(0)
  const frameRef = useRef<number | null>(null)
  const progress = (elapsed % Time.MINUTE) / Time.MINUTE

  const stopLoop = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }
  }, [])

  const startLoop = useCallback(() => {
    stopLoop()
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null
      setElapsed(Date.now() - timeRef.current)
      startLoop()
    })
  }, [stopLoop])

  useEffect(() => () => stopLoop(), [stopLoop])

  const start = useCallback(() => {
    timeRef.current = Date.now()

    setState('running')
    setLaps([])
    setElapsed(0)
    startLoop()
  }, [startLoop])

  const lap = useCallback(() => {
    setLaps((prevLaps) => {
      const lastLap = prevLaps.at(-1) ?? 0
      return [...prevLaps, elapsed - lastLap]
    })
  }, [elapsed])

  const resume = useCallback(() => {
    timeRef.current = Date.now() - elapsed
    setState('running')
    startLoop()
  }, [startLoop, elapsed])

  const stop = useCallback(() => {
    setState('stopped')
    stopLoop()
  }, [stopLoop])

  const reset = useCallback(() => {
    timeRef.current = 0
    frameRef.current = null

    setState('idle')
    setLaps([])
    setElapsed(0)
  }, [])

  return (
    <Surface>
      <VStack gap={24}>
        <ZStack style={{ placeItems: 'center' }}>
          <Timer lap={laps.length} time={elapsed} />
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
          {state === 'stopped' ? (
            <Button variant="distractive" onClick={reset}>
              Reset
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={lap}
              disabled={state === 'idle'}
            >
              Lap
            </Button>
          )}
          {state === 'idle' ? (
            <Button variant="primary" onClick={start}>
              Start
            </Button>
          ) : state === 'running' ? (
            <Button variant="primary" onClick={stop}>
              Stop
            </Button>
          ) : (
            <Button variant="primary" onClick={resume}>
              Resume
            </Button>
          )}
        </HStack>
        <VStack gap={8} asChild>
          <ul>
            {laps.map((lapTime, index) => (
              <HStack
                key={index}
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
                    <span>Lap {index + 1}</span>
                  </Text>
                  <Text variant="label" asChild>
                    <span>{formatTime(lapTime)}</span>
                  </Text>
                </li>
              </HStack>
            ))}
          </ul>
        </VStack>
      </VStack>
    </Surface>
  )
}
