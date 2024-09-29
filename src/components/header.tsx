import React from "react"

function Header() {
  const container_style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "auto auto",
  }
  const right_container_style: React.CSSProperties = {
    margin:"0 0 0 auto",
  }
  const left_container_style: React.CSSProperties = {
    margin:"auto 0 0 0"
  }
  return(
    <div>
      <div
        style={container_style}
      >
        <div 
          style={left_container_style}
        >
          Game by xenya52
        </div>
        <div
          style={right_container_style}
        >
          <button>save</button>
          <button>quit</button>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Header