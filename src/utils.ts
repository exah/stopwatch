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
