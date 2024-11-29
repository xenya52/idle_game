interface IBuilding {
  state: boolean;
  desc: string;
  switchState: () => void;
  setDesc: (newDesc: string) => void;
}

export default IBuilding;
