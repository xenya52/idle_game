import React from "react"

function Footer() {

  const footerStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "0",
    width: "100%",
  }

  return(
    <div 
      style={footerStyle}
    >
      <hr
      />
      <p>
        To my portfolio
      </p>
    </div>
  )
}

export default Footer