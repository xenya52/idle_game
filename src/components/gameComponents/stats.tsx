import React from "react"
import useCozyCatCoinStore from "../../stores/cozyCatCoinStore"

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

  const { coin, desc  } = useCozyCatCoinStore()

  return(
    <div style={statsContainerStyle}>
      <StatsItem name={"CozyCatCoin"} desc={desc} amount={coin} />
    </div>  
  )
}

export default Stats