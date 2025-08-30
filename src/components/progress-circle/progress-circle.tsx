import { cx, clamp } from '../../utils'
import { rootRecipe, circleRecipe } from './progress-circle.css'

export interface ProgressCircleProps
  extends Omit<React.SVGAttributes<SVGElement>, 'size' | 'stroke'> {
  size: number
  stroke: number
  progress: number
  animated?: boolean
}

export function ProgressCircle({
  className,
  size,
  stroke,
  progress,
  animated,
  ...rest
}: ProgressCircleProps) {
  const center = size / 2
  const radius = center - stroke / 2
  const strokeDasharray = 2 * Math.PI * radius
  const strokeDashoffset = strokeDasharray * (1 - clamp(0, 1, progress))

  return (
    <svg
      className={cx(rootRecipe(), className)}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-valuemax={1}
      aria-valuemin={0}
      aria-valuenow={progress}
      aria-valuetext={`${100 * progress}%`}
      role="progressbar"
      {...rest}
    >
      <circle
        className={cx(circleRecipe({ variant: 'grey' }))}
        cx={center}
        cy={center}
        r={radius}
        stroke="currentColor"
        strokeWidth={stroke}
      />
      <circle
        className={cx(circleRecipe({ variant: 'yellow', animated }))}
        cx={center}
        cy={center}
        r={radius}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        strokeWidth={stroke}
        style={{ opacity: progress === 0 ? 0 : 1 }}
      />
    </svg>
  )
}
