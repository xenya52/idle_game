import IRessource from "./IRessource";

interface IBuilding {
  state: boolean;
  desc: string;
  production: () => IRessource;
  setState: (newState: boolean) => boolean;
  setDesc: (newDesc: string) => string;
}

export default IBuilding;
