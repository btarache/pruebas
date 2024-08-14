import { useState } from "react"

export const AgregarTarea = () => {
  
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        
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
