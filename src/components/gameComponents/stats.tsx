import React from "react";
import useCozyCatCoinStore from "../../stores/cozyCatCoinStore";
import useBuildingsStore from "../../stores/isUnlockedStore";

interface ressourcesItemProps {
  name: string;
  desc: string;
  amount: number;
}
interface buidlingItemProps {
  name: string;
  isVisible: boolean;
}

function RessourcesItem({ name, desc, amount }: ressourcesItemProps) {
  return (
    <div>
      <p>
        {amount} = {name}
      </p>
      {/* TODO OnnHover = props.description */}
    </div>
  );
}

function BuildingItem({ name, isVisible }: buidlingItemProps) {
  if (isVisible) {
    return (
      <div>
        <p>{name}</p>
        {/* TODO OnnHover = props.description */}
      </div>
    );
  }
}

function Stats() {
  const statsContainerStyle: React.CSSProperties = {
    border: "1px solid red",
  };

  const { coin, desc } = useCozyCatCoinStore();
  const { farmState } = useBuildingsStore();

  return (
    <div style={statsContainerStyle}>
      <div>
        <p>Ressources:</p>
        <RessourcesItem name={"CozyCatCoin"} desc={desc} amount={coin} />
      </div>
      <hr />
      <div>
        <p>Buildings: </p>
        <BuildingItem name="Farm" isVisible={farmState} />
      </div>
    </div>
  );
}

export default Stats;
