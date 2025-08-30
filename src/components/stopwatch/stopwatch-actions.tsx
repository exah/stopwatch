import { ImpossibleError } from '../../errors'
import { Button } from '../button'
import type { StopwatchState, StopwatchAction } from './types'

export interface StopwatchActionsProps {
  state: StopwatchState
  onAction(action: StopwatchAction): void
}

export function StopwatchActions({ state, onAction }: StopwatchActionsProps) {
  switch (state) {
    case 'idle':
      return (
        <>
          <Button variant="secondary" disabled>
            Lap
          </Button>
          <Button variant="primary" onClick={() => onAction('start')}>
            Start
          </Button>
        </>
      )
    case 'running':
      return (
        <>
          <Button variant="secondary" onClick={() => onAction('lap')}>
            Lap
          </Button>
          <Button variant="primary" onClick={() => onAction('stop')}>
            Stop
          </Button>
        </>
      )
    case 'stopped':
      return (
        <>
          <Button variant="distractive" onClick={() => onAction('reset')}>
            Reset
          </Button>
          <Button variant="primary" onClick={() => onAction('resume')}>
            Resume
          </Button>
        </>
      )
    default:
      throw new ImpossibleError('Unhandled stopwatch state', state)
  }
}
