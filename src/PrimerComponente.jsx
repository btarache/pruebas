const string = 'Esto es un string'
const number = 12345
const array = ['Curso de React', 4]
const boolean = true
const fecha = new Date()
const objeto = { nombre: 'Curso de react', duracion: 4 }




export const PrimerComponente = () => {
    return (
        <p>{ JSON.stringify(fecha) }</p>  /*  Igual para objeto p/e JSON.stringify(fecha) */
    )
}