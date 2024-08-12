import './styles.css'


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente' /* Se coloca entre llaves por no se default */



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente />
  </StrictMode>,
)
