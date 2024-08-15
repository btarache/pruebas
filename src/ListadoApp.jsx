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
        {  id: 1, nombre: 'Instalaciones', visto: true },
        {  id: 2, nombre: 'Uso de Vite', visto: true},
        {  id: 3, nombre: 'Componentes', visto: true},
        {  id: 4, nombre: 'Variables JSX', visto: true},
        {  id: 5, nombre: 'Eventos', visto: true},
        {  id: 6, nombre: 'useState', visto: true},
        {  id: 7, nombre: 'Redux', visto: false},
        {  id: 8, nombre: 'customHooks', visto: false},
    ]

    const [ arreglo, setArreglo ] = useState(listadoSecciones)   
    
    /* Esto se agreggo al crear el archivo  .jsx para ENVAR info desde el CHILD */
    /* Vamos a estar recibiendo el valor de VAL */
    /* Y en la linea 65 se CAMBIO (setArreglo) por la nueva (onAgregatarear) */
    const onAgregarTarea = (val) => {
        
        /* Y esto para evitar que mande valor vacio desde el INPUT */
        if( val < 1 ) return

        /* Y esto me lo traje del ORIGINAL AgregarTarea.jsx antes de modif LIN 11 */  
        const envio = {

            /* Y esto para que se siga incrementando toda vez que uso ID de la var LET de arriba */
            id: arreglo.length + 1,

            nombre: val,
            envio: false
        }   
        setArreglo([...arreglo, envio])
    }


    return (
        <>
            <h1 className='espacio'>MAPS - Listado de temas del curso</h1>
            <ol>
                
                {arreglo.map(item => <Item key={item.id}  nombre={item.nombre} visto={item.visto}></Item>)}
                
            </ol>



            <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
            <button onClick={() => addTask()}>AGREGAR</button>
        </>
    )
}

/* Y en la linea 59 se CAMBIO (<Item key={item.nombre}) por {item.id} y asi
por mas que le mandemos cosas REPETIDAS va a seguir funcionando porque lo hace UNICO
*/