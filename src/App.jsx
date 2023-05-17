import { useState } from 'react'
import './App.css'

import Cuadrado from './Components/Cuadrado'

function App() {
  
  const TURNO = {
    X: "x",
    O: "o"
  }
  
  const actualizarTurno = (index) => {
    const nuevoTablero = [...tablero]
    nuevoTablero[index]= turno

    const nuevoTurno = turno === TURNO.X ? TURNO.O : TURNO.X
    setTablero(nuevoTablero)
    setTurno(nuevoTurno)
  }
  
  const test = ["x", "o", "x", "x", "o", "x", "x", "o", "x"]


  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNO.X)
  const [win, setWin] = useState("Empate")


  // -------------------


  console.log(tablero)
  // setTablero(test)

  return (
    <>
      <div
        className='tablero'>
        {
          tablero.map((jugador, index) => {
            return (
              <Cuadrado
                key={index}
                index={index}
                item={jugador}
                actualizarTurno={actualizarTurno}
              >
                {jugador}
              </Cuadrado>
            )
          })
        }
      </div>
      <div>
        <Cuadrado>
          {turno}
        </Cuadrado>
      </div>
    </>
  )
}

export default App
