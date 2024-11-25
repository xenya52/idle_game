import IRessource from "./IRessource";

interface IBuilding {
  state: boolean;
  desc: string;
  switchState: () => void; // TODO implement boolean
  setDesc: (newDesc: string) => void; // TODO implement boolean
  production: () => IRessource;
}

export default IBuilding;
