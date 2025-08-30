import { useState, useRef, useEffect, useCallback } from 'react'
import { ImpossibleError } from '../../errors'
import type { StopwatchState, StopwatchAction } from './types'

interface StopWatchActionHandler {
  (action: StopwatchAction): void
}

export interface StopWatchResult {
  time: number
  laps: number[]
  state: StopwatchState
  action: StopWatchActionHandler
}

export function useStopwatch(): StopWatchResult {
  const [state, setState] = useState<StopwatchState>('idle')
  const [elapsed, setElapsed] = useState(0)
  const [laps, setLaps] = useState<number[]>([])
  const timeRef = useRef<number>(0)
  const frameRef = useRef<number | null>(null)

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

  const action = useCallback<StopWatchActionHandler>(
    function handleStopwatchAction(action) {
      switch (action) {
        case 'start': {
          timeRef.current = Date.now()

          setState('running')
          setLaps([])
          setElapsed(0)
          startLoop()
          break
        }
        case 'lap': {
          setLaps((prevLaps) => {
            const lastLap = prevLaps.at(-1) ?? 0
            return [...prevLaps, elapsed - lastLap]
          })
          break
        }
        case 'resume': {
          timeRef.current = Date.now() - elapsed
          setState('running')
          startLoop()
          break
        }
        case 'stop': {
          setState('stopped')
          stopLoop()
          break
        }
        case 'reset': {
          timeRef.current = 0
          frameRef.current = null

          setState('idle')
          setLaps([])
          setElapsed(0)
          break
        }
        default:
          throw new ImpossibleError('Unhandled stopwatch action', action)
      }
    },
    [startLoop, stopLoop, elapsed],
  )

  return { time: elapsed, laps, state, action }
}
