import IRessource from "./IRessource";
import User from "./User";

interface IBuilding {
  state: boolean;
  desc: string;
  switchState: () => void; // TODO implement boolean
  setDesc: (newDesc: string) => void; // TODO implement boolean
  production: (user: User) => IRessource;
}

export default IBuilding;
