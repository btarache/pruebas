import './PrimerComponente.css'
import PropTypes from 'prop-types'



const string = 'Esto es un string'
const number = 12345
const array = ['Curso de React', 4]
const boolean = true
const fecha = new Date()
const objeto = { nombre: 'Curso de react', duracion: 4 }







export const PrimerComponente = ({ titulo, subtitulo = 'Seccion de Props' }) => {
    return (
        <>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2> 
            <p>Variable tipo String: {string}</p>
            <p>Variable tipo Number: {number}</p>
            <p>Variable tipo Array: {array}</p>
            <p>Variable tipo Boolean: {boolean}</p>
            <p>Variable tipo Fecha: { JSON.stringify(fecha) }</p> 
            <p>Variable tipo Objeto: { JSON.stringify(objeto) }</p>
        </>
        
    )
}

PrimerComponente.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
}