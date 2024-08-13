import './styles.css'


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente' /* Se coloca entre llaves por NO ser default */
import { ContadorApp } from './ContadorApp'
import { ListadoApp } from './ListadoApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente titulo='Esta seccion es de PROPS - Titulo' subtitulo='Subtitulo de Props'/>
    <ContadorApp value={0}/>
    <ListadoApp />
  </StrictMode>,
)
