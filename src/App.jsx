import { useState } from 'react'
import './App.css'

import { COMBINACIONES_GANADORAS, TURNO } from './js/constantes'
import { buscarGanador } from './js/logica'

import Cuadrado from './Components/Cuadrado'
import { FinDePartida } from './Components/FinDePartida'

function App() {

  const reset = () => {
    setTablero(Array(9).fill(null))
    setTurno(TURNO.X)
    setWin(null)
  }

  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNO.X)
  const [win, setWin] = useState(null)


  const actualizarTurno = (index) => {

    if (tablero[index]) return

    const nuevoTablero = tablero
    const nuevoTurno = turno === TURNO.X ? TURNO.O : TURNO.X

    nuevoTablero[index] = turno

    const newWin = buscarGanador(tablero)

    if (newWin) {
      setWin(newWin)
    } else if (nuevoTablero.every((cuadrado) => cuadrado !== null)) {
      setWin(false)
    }

    setTablero(nuevoTablero)
    setTurno(nuevoTurno)
  }

  return (
    <>
      <div>
        <FinDePartida reset={reset} win={win} />
      </div>
      <section className='turn'>
        <h1>Turno</h1>
        <Cuadrado >
          {turno}
        </Cuadrado>
      </section>
      <div
        className='tablero'>
        {
          tablero.map((jugador, index) => {
            return (
              <Cuadrado
                key={index}
                index={index}
                item={jugador}
                win={win}
                actualizarTurno={actualizarTurno}
              >
                {jugador}
              </Cuadrado>
            )
          })
        }
      </div>

    </>
  )
}

export default App
