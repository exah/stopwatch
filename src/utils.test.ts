import { expect, test, describe } from 'vitest'
import { cx, formatTime, extractSprinklesAndCleanupProps } from './utils'
import { Time } from './constants'
import { sprinkles } from './theme'

describe('classNames (cx)', () => {
  test('merge class names', () => {
    expect(cx('foo', 'bar', 'baz')).toBe('foo bar baz')
  })

  test('skip undefined values', () => {
    expect(cx('foo', undefined, 'bar', void 0, 'baz')).toBe('foo bar baz')
  })

  test('return undefined on empty list', () => {
    expect(cx()).toBe(undefined)
  })
})

describe('formatTime', () => {
  test('format zero', () => {
    expect(formatTime(0)).toBe('00:00.00')
  })

  test('format seconds', () => {
    expect(formatTime(Time.SECOND)).toBe('00:01.00')
    expect(formatTime(10 * Time.SECOND)).toBe('00:10.00')
    expect(formatTime(59 * Time.SECOND)).toBe('00:59.00')
    expect(formatTime(59 * Time.SECOND + 200)).toBe('00:59.20')
  })

  test('format minutes', () => {
    expect(formatTime(Time.MINUTE)).toBe('01:00.00')
    expect(formatTime(10 * Time.MINUTE)).toBe('10:00.00')
    expect(formatTime(59 * Time.MINUTE)).toBe('59:00.00')
    expect(formatTime(59 * Time.MINUTE + 59 * Time.SECOND + 200)).toBe(
      '59:59.20',
    )
  })

  test('format hours', () => {
    expect(formatTime(Time.HOUR)).toBe('01:00:00')
    expect(formatTime(Time.HOUR + 5 * Time.MINUTE + 5 * Time.SECOND)).toBe(
      '01:05:05',
    )

    expect(
      formatTime(300 * Time.HOUR + 59 * Time.MINUTE + 59 * Time.SECOND),
    ).toBe('300:59:59')
  })
})

describe('extractSprinklesAndProps', () => {
  test('extract sprinkles and cleanup props', () => {
    expect(
      extractSprinklesAndCleanupProps(
        { color: 'grey-90', backgroundColor: 'yellow-10', foo: 'bar' },
        sprinkles,
      ),
    ).toEqual([
      { color: 'grey-90', backgroundColor: 'yellow-10' },
      { foo: 'bar' },
    ])
  })

  test('pass through sprinkles', () => {
    expect(
      extractSprinklesAndCleanupProps(
        { color: 'grey-90', backgroundColor: 'yellow-10' },
        sprinkles,
      ),
    ).toEqual([
      {
        color: 'grey-90',
        backgroundColor: 'yellow-10',
      },
      {},
    ])
  })

  test('pass through props', () => {
    expect(extractSprinklesAndCleanupProps({ foo: 'bar' }, sprinkles)).toEqual([
      {},
      { foo: 'bar' },
    ])
  })

  test('do nothing for empty props', () => {
    expect(extractSprinklesAndCleanupProps({}, sprinkles)).toEqual([{}, {}])
  })
})
