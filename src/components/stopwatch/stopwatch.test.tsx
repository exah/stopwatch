import { test, expect } from '@playwright/experimental-ct-react'
import { Time } from '../../constants'
import { Stopwatch } from './stopwatch'

test('stopwatch', async ({ mount, page }) => {
  const now = Date.now()
  const component = await mount(<Stopwatch />)
  const timeLabel = component.getByRole('heading', { level: 2 })
  const lapLabel = component.getByRole('heading', { level: 3 })
  const lapButton = component.getByRole('button', { name: 'Lap' })
  const startButton = component.getByRole('button', { name: 'Start' })
  const stopButton = component.getByRole('button', { name: 'Stop' })
  const resumeButton = component.getByRole('button', { name: 'Resume' })
  const resetButton = component.getByRole('button', { name: 'Reset' })
  const progressbar = component.getByRole('progressbar', { name: 'Second' })
  const list = component.getByRole('list', { name: 'Laps' })

  await expect(lapLabel).toContainText('Lap 0')
  await expect(timeLabel).toContainText('00:00.00')
  await expect(lapButton).toBeDisabled()
  await expect(startButton).toBeVisible()
  await expect(list).toBeEmpty()

  await test.step('start timer', async () => {
    await page.clock.setFixedTime(now)
    await startButton.click()
    await page.clock.setFixedTime(now + 5 * Time.MINUTE + 12 * Time.SECOND)

    await expect(component).toContainText('05:12.00')
    await expect(lapButton).toBeEnabled()
    await expect(startButton).toBeHidden()
    await expect(stopButton).toBeVisible()
    await expect(progressbar).toHaveAttribute('aria-valuetext', '20%')
  })

  await test.step('record lap', async () => {
    await lapButton.click()

    await expect(list).not.toBeEmpty()
    await expect(list.getByRole('listitem')).toHaveCount(1)
    await expect(list.getByRole('listitem').last()).toContainText(
      'Lap 1: 05:12.00',
    )
    await expect(lapLabel).toContainText('Lap 1')

    await page.clock.setFixedTime(now + 6 * Time.MINUTE + 59 * Time.SECOND)
    await expect(component).toContainText('06:59.00')

    await lapButton.click()
    await expect(list.getByRole('listitem')).toHaveCount(2)
    await expect(list.getByRole('listitem').last()).toContainText(
      'Lap 2: 01:47.00',
    )
  })

  await test.step('stop timer', async () => {
    await stopButton.click()

    await expect(resetButton).toBeVisible()
    await expect(resumeButton).toBeVisible()
  })

  await test.step('resume timer', async () => {
    await resumeButton.click()

    await page.clock.setFixedTime(now + 5 * Time.HOUR + 59 * Time.SECOND)

    await expect(lapLabel).toContainText('Lap 2')
    await expect(timeLabel).toContainText('05:00:59')
  })

  await test.step('reset timer', async () => {
    await stopButton.click()
    await resetButton.click()

    await expect(lapLabel).toContainText('Lap 0')
    await expect(timeLabel).toContainText('00:00.00')
    await expect(lapButton).toBeDisabled()
    await expect(startButton).toBeVisible()
    await expect(list).toBeEmpty()
    await expect(list.getByRole('listitem')).toBeHidden()
  })
})
