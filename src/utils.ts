import { Time } from './constants'

export function assert<I>(
  input: I,
  message = 'Assertion failed',
): asserts input {
  if (input != null) {
    return
  }

  throw new Error(message)
}

export function ensure<I>(input: I | null | undefined, message?: string): I {
  assert(input, message)
  return input
}

function classNames(...input: (undefined | string)[]) {
  return input.filter((item) => item != null).join(' ') || undefined
}

export { classNames as cx }

export function clamp(min: number, max: number, input: number) {
  return Math.min(Math.max(input, min), max)
}

function formatTimePart(time: number) {
  return time.toString().padStart(2, '0')
}

export function formatTime(time: number) {
  const wholeHours = formatTimePart(Math.trunc(time / Time.HOUR))
  const wholeMinutes = formatTimePart(
    Math.trunc(time / Time.MINUTE) % Time.DIVISION,
  )

  const seconds = time / Time.SECOND
  const wholeSecond = formatTimePart(Math.trunc(seconds) % Time.DIVISION)
  const fractionOfSecond = seconds.toFixed(2).split('.')[1]

  if (wholeHours === '00') {
    return `${wholeMinutes}:${wholeSecond}.${fractionOfSecond}`
  }

  return `${wholeHours}:${wholeMinutes}:${wholeSecond}`
}

export function extractSprinklesAndCleanupProps<
  S,
  P extends S & Record<string, unknown>,
>(
  props: P,
  sprinkles: ((props: S) => string) & { properties: Set<keyof S> },
): [Partial<S>, Partial<P>] {
  const styles: Partial<S> = {}

  for (const key of sprinkles.properties) {
    if (props[key] != null) {
      // Not using styles[key] = props[key] due to mixed and strict signature of props
      // Means we cannot assign color properties to spacing ones, as we can't (easily) verify key value pair, but we are sure here it's valid
      Object.assign(styles, { [key]: props[key] })
    }

    delete props[key]
  }

  return [styles, props]
}
