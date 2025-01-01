import IDictionary from "./IDictionary";

class User {
  id: number;
  ressourceList: IDictionary<number>;
  buildingsList: IDictionary<number>;
  constructor() {
    this.id = 0; // Todo implement a "create id" function
    this.ressourceList = { Fish: 0, CCC: 0 };
    this.buildingsList = { Fisher: 0 };
  }
}

export default User;
