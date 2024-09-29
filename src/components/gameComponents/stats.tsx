import React from "react"

interface itemProps {
  name: string,
  desc: string,
  amount: number,
}
function StatsItem({name, desc, amount}: itemProps) {
  return(
    <div>
      <p>
        {amount} = {name}
      </p>
      {/* TODO OnnHover = props.description */}
    </div>
  )
}

function Stats() {
  const statsContainerStyle: React.CSSProperties = {
    border:"1px solid red"
  }
  return(
    <div style={statsContainerStyle}>
      <StatsItem name={"test"} desc={"test"} amount={0} />
    </div>  
  )
}

export default Stats