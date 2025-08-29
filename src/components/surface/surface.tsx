import { Box } from '../box'
import { surfaceStyle } from './surface.css'

interface SurfaceProps {
  children?: React.ReactNode
}

export function Surface(props: SurfaceProps) {
  return <Box className={surfaceStyle} {...props} />
}
