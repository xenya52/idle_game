import IBuilding from "./IBuilding.tsx";
import IRessource from "./IRessource.tsx";
class Farm implements IBuilding {
  state: boolean;
  desc: string;
  switchState: () => void;
  setDesc: (newDesc: string) => void;
  production: () => IRessource;

  constructor(desc: string = "No description after initialsation") {
    this.state = false;
    this.desc = desc;

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
