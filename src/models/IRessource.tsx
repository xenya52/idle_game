interface IRessource {
  amount: number;
  desc: string;
  setAmount: (newAmount: number) => void;
  setDesc: (newDesc: string) => void;
}

export default IRessource;
