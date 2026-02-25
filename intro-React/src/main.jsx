import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './components/login'
import {Encabezado} from './components/Encabezado'
import { Datos } from './components/Datos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Encabezado />
    <Datos />
  </StrictMode>
)
