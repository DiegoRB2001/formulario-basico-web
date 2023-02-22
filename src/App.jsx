import './App.css'
import Areas from './Areas'

function App() {

  return (
    <div>
      <h1>Calculadora de áreas</h1>
        <Areas 
        ladoCuadrado={4}
        baseRectangulo = {5}
        alturaRectangulo= {10}
        baseTriangulo={6}
        alturaTriangulo={5}
        />
    </div>
  )
}

export default App
