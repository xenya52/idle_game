import IBuilding from "./IBuilding.tsx";
import User from "./User.tsx";

class Farm implements IBuilding {
  owner: User;
  state: boolean;
  desc: string;
  switchState: () => void;
  setDesc: (newDesc: string) => void;
  produces: () => void;
  interval_miliseconds: number = 1000;

  constructor(user: User, desc: string = "No description after initialsation") {
    this.owner = user;
    this.state = false;
    this.desc = desc;

    this.switchState = () => {
      this.state = !this.state;
    };

    this.setDesc = (newDesc: string) => {
      this.desc = newDesc;
    };

    this.produces = () => {
      this.owner.ressourceList["CozyCatCoin"] += 1;
    };
  }
}

export default Farm;
