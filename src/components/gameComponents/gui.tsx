import useCozyCatCoinStore from "../../stores/cozyCatCoinStore"

function Gui() {

  const { setCoin, coin } = useCozyCatCoinStore()

  const buttonClicked = () => {
    setCoin(coin + 1)
  }
  return(
    <div>
      <button
        onClick={buttonClicked}
      >
        Click me! (GUI)
      </button>
    </div>
  )
}

export default Gui