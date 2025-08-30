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
  return input
    .flat(1)
    .filter((item) => item != null)
    .join(' ')
}

export { classNames as cx }

export function clamp(min: number, max: number, input: number) {
  return Math.min(Math.max(input, min), max)
}

function getTimePart(period: number) {
  return (Math.trunc(period) % Time.DIVISION).toString().padStart(2, '0')
}

export function formatTime(time: number) {
  const wholeHours = getTimePart(time / Time.HOUR)
  const wholeMinutes = getTimePart(time / Time.MINUTE)

  const seconds = time / Time.SECOND
  const wholeSecond = getTimePart(seconds)
  const fractionOfSecond = seconds.toFixed(2).split('.')[1]

  if (wholeHours === '00') {
    return `${wholeMinutes}:${wholeSecond}.${fractionOfSecond}`
  }

  return `${wholeHours}:${wholeMinutes}:${wholeSecond}`
}
