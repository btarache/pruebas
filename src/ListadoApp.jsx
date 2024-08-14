/* MAPS */
import React from 'react' /** Esto ya no se usa */
import { useState } from 'react'
import { AgregarTarea } from './components/AgregarTarea'

const Item = ({nombre, visto}) => {
    return(
        <li>{nombre}
            {visto ? '✅' : '⛔'}
            </li>
    )
}

export const ListadoApp = () => {

    const addTask = () => {
        setArreglo([...arreglo, { nombre: 'nuevo', visto: false }])
    }

    let listadoSecciones = [
        { nombre: 'Instalaciones', visto: true },
        { nombre: 'Uso de Vite', visto: true},
        { nombre: 'Componentes', visto: true},
        { nombre: 'Variables JSX', visto: true},
        { nombre: 'Eventos', visto: true},
        { nombre: 'useState', visto: true},
        { nombre: 'Redux', visto: false},
        { nombre: 'customHooks', visto: false},
    ]

    const [ arreglo, setArreglo ] = useState(listadoSecciones)    

    return (
        <>
            <h1 className='espacio'>MAPS - Listado de temas del curso</h1>
            <ol>
                {arreglo.map(item => <Item key={item.nombre}  nombre={item.nombre} visto={item.visto}></Item>)}
                
            </ol>

            <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>
            <button onClick={() => addTask()}>AGREGAR</button>
        </>
    )
}

