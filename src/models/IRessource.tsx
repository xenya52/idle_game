interface IRessource {
  amount: number;
  desc: string;
  setAmount: (newAmount: number) => boolean;
  setDesc: (newDesc: string) => boolean;
}

export default IRessource;
