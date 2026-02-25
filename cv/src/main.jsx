import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Navbar} from './components/navBar'
import { Presentacion } from './components/presentacion'
import { Links } from './components/links'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Presentacion/>
    <Links />
  </StrictMode>,
)
