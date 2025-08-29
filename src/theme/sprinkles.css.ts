import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { conditions } from './conditions'
import { color } from './color'
import { space } from './space'
import { radii } from './radii'

const staticProperties = defineProperties({
  properties: {
    borderRadius: radii,
  },
})

const responsiveProperties = defineProperties({
  conditions,
  defaultCondition: '_',
  properties: {
    gap: space,
    rowGap: space,
    columnGap: space,
    margin: space,
    marginBlockStart: space,
    marginBlockEnd: space,
    marginBlock: space,
    marginInlineStart: space,
    marginInlineEnd: space,
    marginInline: space,
    padding: space,
    paddingBlockStart: space,
    paddingBlockEnd: space,
    paddingBlock: space,
    paddingInlineStart: space,
    paddingInlineEnd: space,
    paddingInline: space,
  },
})

const colorProperties = defineProperties({
  properties: {
    color,
    backgroundColor: color,
    borderColor: color,
  },
})

export const sprinkles = createSprinkles(
  staticProperties,
  responsiveProperties,
  colorProperties,
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
