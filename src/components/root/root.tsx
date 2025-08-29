import { useState } from 'react'
import { themeClassName, sprinkles } from '../../theme'
import { cx } from '../../utils'
import { Button } from '../button'
import { Circle } from '../circle'
import { HStack } from '../h-stack'
import { Surface } from '../surface'
import { Text } from '../text'
import { VStack } from '../v-stack'
import { ZStack } from '../z-stack'
import { rootStyle } from './root.css'

export function Root() {
  const [state, setState] = useState<'idle' | 'running' | 'stopped'>()
  return (
    <VStack className={cx(themeClassName, rootStyle)}>
      <Surface>
        <VStack gap={24}>
          <ZStack>
            <VStack style={{ placeSelf: 'center' }}>
              <Text variant="label" asChild>
                <h3>Lap 0</h3>
              </Text>
              <Text variant="time" asChild>
                <p>00:47</p>
              </Text>
            </VStack>
            <Circle
              className={sprinkles({ color: 'grey-90' })}
              size={360}
              stroke={12}
              progress={1}
            />
            <Circle
              className={sprinkles({ color: 'yellow-50' })}
              size={360}
              stroke={12}
              progress={0.8}
            />
          </ZStack>
          <HStack gap={16}>
            <Button variant="secondary" disabled>
              Lap
            </Button>
            <Button variant="primary">Start</Button>
          </HStack>
          <VStack gap={8} asChild>
            <ul>
              <HStack
                gap={16}
                style={{
                  gridAutoColumns: 'auto',
                  justifyContent: 'space-between',
                }}
                asChild
              >
                <li>
                  <Text variant="label" asChild>
                    <span>Lap 0</span>
                  </Text>
                  <Text variant="label" asChild>
                    <span>00:47</span>
                  </Text>
                </li>
              </HStack>
            </ul>
          </VStack>
        </VStack>
      </Surface>
    </VStack>
  )
}
