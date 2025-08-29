import './reset.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ensure } from './utils'
import { Root } from './components'

createRoot(ensure(document.getElementById('app'))).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
