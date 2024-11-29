import useUserStore from "../../stores/isUnlockedStore";

function Gui() {
  const { ressourceList } = useUserStore; //TODO use the store
  const { setCoin, coin } = useCozyCatCoinStore();
  const { setFarmState } = useBuildingsStore();
  const buttonClicked = () => {
    setCoin(coin + 1);
    ressourceList["CozyCatCoin"] += 1;
  };
  const buyFarmButtonClicked = () => {
    setFarmState(true);
  };
  return (
    <div>
      <button onClick={buttonClicked}>Click me! (GUI)</button>
      <button onClick={buyFarmButtonClicked}>Buy farm</button>
    </div>
  );
}

export default Gui;
