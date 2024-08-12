import './styles.css'


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente' /* Se coloca entre llaves por NO ser default */



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente titulo='Esta seccion es de PROPS - Titulo' subtitulo='Subtitulo de Props'/>
  </StrictMode>,
)
