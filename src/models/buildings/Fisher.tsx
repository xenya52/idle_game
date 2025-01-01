import IBuilding from "../IBuilding.tsx";
import User from "../User.tsx";

class Fisher implements IBuilding {
  owner: User;
  isVisible: boolean;
  name: string = "Fisher";
  desc: string =
    "A fisher is a person who catches fish. They can be found along the coast or on boats. They can catch fish with a fishing rod or a fishing net. Fishers can also catch other sea creatures like crabs and lobsters.";
  switchIsVisble: () => void;
  produces: () => void;
  interval_miliseconds: number = 1000;

  constructor(owner_: User) {
    this.owner = owner_;
    this.isVisible = false;

    this.switchIsVisble = () => {
      this.isVisible = !this.isVisible;
    };

    this.produces = () => {
      if (this.isVisible) {
        this.owner.ressourceList["Fish"] += 1;
      }
    };
  }
}

export default Fisher;
