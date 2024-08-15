import { useState } from "react"

export const AgregarTarea = ({ agregarTarea }) => {
  
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {

        const envio = {
            nombre: inputValue,
            visto: false
        }

        event.preventDefault()   /* PREVENT DEFAULT PARA QUE NO SE ACTUALICE LA PAG AL INGRESAR DATA AL INPUT */
        
        agregarTarea(tareas => [...tareas, envio])
    }
  
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingresa Tarea Nueva"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
