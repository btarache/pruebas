import React from 'react' /** Esto ya no se usa */

const Items = ({nombre, visto}) => {
    return(
        <li>{nombre}
            {visto ? '✅' : '⛔'}
            </li>
    )
}


export const ListadoApp = () => {
    return (
        <>
            <h1>Listado de temas del curso</h1>
            <ol>
                <Items nombre="Instalaciones" visto={true}></Items>
                <Items nombre="Uso de Vite" visto={true}></Items>
                <Items nombre="Componentes" visto={true}></Items>
                <Items nombre="Variables JSX" visto={true}></Items>
                <Items nombre="Eventos" visto={true}></Items>
                <Items nombre="useState" visto={true}></Items>
                <Items nombre="Redux" visto={false}></Items>
                <Items nombre="customHooks" visto={false}></Items>
            </ol>
        </>
    )
}

