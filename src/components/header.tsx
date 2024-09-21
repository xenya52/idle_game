import React from "react"

function Header() {
  const grid_header_style: React.CSSProperties = {
    display: "grid",
  }
  return(
    <div>
      <div
        style={grid_header_style}
      >
        <div>
          <div>
            <p>Game by xenya52</p>
          </div>
          <div>
            <button>save</button>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Header