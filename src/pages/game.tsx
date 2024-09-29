import React from "react"
import Gui from "../components/gameComponents/gui"
import Stats from "../components/gameComponents/stats"

function Game() {
  const gameStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "auto auto",
  }
  return(
    <div style={gameStyle}>
      <Stats
      />
      <Gui 
      />
    </div>
  )
}

export default Game