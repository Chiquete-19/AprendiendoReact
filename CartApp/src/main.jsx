import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Carts } from './components/carts'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Carts />
  </StrictMode>,
)
