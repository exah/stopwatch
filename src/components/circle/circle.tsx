import { cx, clamp } from '../../utils'
import * as styles from './circle.css'

export interface CircleProps
  extends Omit<React.SVGAttributes<SVGElement>, 'size' | 'stroke'> {
  size: number
  stroke: number
  progress: number
  animated?: boolean
}

export function Circle({
  className,
  size,
  stroke,
  progress,
  animated,
  ...rest
}: CircleProps) {
  const center = size / 2
  const radius = center - stroke / 2
  const strokeDasharray = 2 * Math.PI * radius
  const strokeDashoffset = strokeDasharray * (1 - clamp(0, 1, progress))

  return (
    <svg
      className={cx(styles.rootRecipe(), className)}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      {...rest}
    >
      <circle
        className={cx(styles.circleRecipe({ animated }))}
        cx={center}
        cy={center}
        fill="none"
        r={radius}
        stroke="currentColor"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        strokeWidth={stroke}
      />
    </svg>
  )
}
