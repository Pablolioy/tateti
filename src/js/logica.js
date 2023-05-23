import { COMBINACIONES_GANADORAS } from "./constantes"

export const buscarGanador = (tablero) => {
    for (const combo of COMBINACIONES_GANADORAS) {
      const [a, b, c] = combo
      if (tablero[a] && tablero[a] == tablero[b] && tablero[a] == tablero[c]) {
        return tablero[a]
        }
      }
  }