import Header from "./components/header";
import Footer from "./components/footer";
import React from "react";
import Game from "./pages/game";

function App() {
  
  const indexCSS: React.CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    margin:"0",
  }

  return(
    <div 
      style={indexCSS}
    >
      <Header
      />
      <Game 
      />
      <Footer
      />
    </div>
  )
}

export default App