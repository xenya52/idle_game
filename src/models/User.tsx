import IBuilding from "./IBuilding";
import IRessource from "./IRessource";

class User {
  id: number;
  ressourceList: IRessource[];
  buildingsList: IBuilding[];
  constructor() {
    this.id = 0; // Todo implement a "create id" function
    this.ressourceList = [];
    this.buildingsList = [];
  }
}

export default User;
