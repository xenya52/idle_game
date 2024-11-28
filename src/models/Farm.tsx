import IBuilding from "./IBuilding.tsx";
import IRessource from "./IRessource.tsx";
import User from "./User.tsx";

class Farm implements IBuilding {
  state: boolean;
  desc: string;
  switchState: () => void;
  setDesc: (newDesc: string) => void;
  production: () => IRessource;
  owner: User;

  constructor(user: User, desc: string = "No description after initialsation") {
    this.state = false;
    this.desc = desc;
    this.owner = user;

    this.switchState = () => {
      this.state = !this.state;
    };

    this.setDesc = (newDesc: string) => {
      this.desc = newDesc;
    };

    this.production = () => {}; // TODO
  }
}
export default Farm;
