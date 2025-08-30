export class ImpossibleError extends Error {
  name = 'ImpossibleError'
  constructor(message: string, value: never) {
    super(`${message}: ${value}`)
  }
}
