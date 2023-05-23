import Cuadrado from './Cuadrado.jsx'

export function FinDePartida ({ reset, win }) {
  if (win === null) return null

  const winText = (win === false ? 'Empate' : 'Ganó:') 

  return (
    <section id="FinDePartida">
      <div>
        <h2>{winText}</h2>

        <header>
          {win && <Cuadrado>{win}</Cuadrado>}
        </header>

        <footer>
          <button onClick={reset}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
