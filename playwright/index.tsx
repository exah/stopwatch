import { beforeMount } from '@playwright/experimental-ct-react/hooks'
import { themeClassName } from '../src/theme'
import '../src/reset.css'

beforeMount(async ({ App }) => (
  <div className={themeClassName}>
    <App />
  </div>
))
