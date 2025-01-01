import React from "react";
import IRessource from "../../models/IRessource";
import IBuilding from "../../models/IBuilding";
import useUserStore from "../../stores/useUserStore";

function RessourcesItem(ressource: IRessource) {
  return (
    <div>
      <p>
        {ressource.amount} = {ressource.name}
      </p>
      {/* TODO OnnHover = props.description */}
    </div>
  );
}

function BuildingItem(building: IBuilding) {
  if (building.isVisible) {
    return (
      <div>
        <p>{building.name}</p>
        {/* TODO OnnHover = props.description */}
      </div>
    );
  }
}

function Stats() {
  const statsContainerStyle: React.CSSProperties = {
    border: "1px solid red",
  };

  const { getUser } = useUserStore();

  return (
    <div style={statsContainerStyle}>
      <div>
        <p>Ressources:</p>
        <RessourcesItem ressource={getUser.ressourceList} />
      </div>
      <hr />
      <div>
        <p>Buildings: </p>
        <BuildingItem />
      </div>
    </div>
  );
}

export default Stats;
