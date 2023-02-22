import React, { useState } from 'react'
import './Areas.css'

const Areas = ({ladoCuadrado, baseRectangulo, alturaRectangulo, baseTriangulo, alturaTriangulo}) => {

  const [areaCuadrado, setAreaCuadrado] = useState(0)
  const [areaRectangulo, setAreaRectangulo] = useState(0)
  const [areaTriangulo, setAreaTriangulo] = useState(0)
return (
    <div>
        <div className='fila'>
            <h2>Área cuadrado</h2>
            <h2>Área rectángulo</h2>
            <h2>Área triángulo</h2>
        </div>
        <div className='fila'>
            <h3>{areaCuadrado}</h3>
            <h3>{areaRectangulo}</h3>
            <h3>{areaTriangulo}</h3>
        </div>
        <div className='fila'>
        <button onClick= {() => {setAreaCuadrado(ladoCuadrado*ladoCuadrado)}}>
                    Cuadrado
                </button>
                <button onClick= {() => {setAreaRectangulo(baseRectangulo*alturaRectangulo)}}>
                    Rectángulo
                </button>
                <button onClick= {() => {setAreaTriangulo((baseTriangulo*alturaTriangulo)/2)}}>
                    Triángulo
                </button>
        </div>
        <button onClick={() => {
            setAreaCuadrado(0)
            setAreaRectangulo(0)
            setAreaTriangulo(0)
        }}>Borrar</button>
    </div>
  )
}

export default Areas