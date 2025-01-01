interface IRessource {
  amount: number;
  name: string;
  desc: string;
  setAmount: (newAmount: number) => void;
}

export default IRessource;
