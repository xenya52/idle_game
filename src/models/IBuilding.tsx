import User from "./User";

interface IBuilding {
  owner: User;
  isVisible: boolean;
  name: string;
  desc: string;
  switchIsVisble: () => void;
}

export default IBuilding;
