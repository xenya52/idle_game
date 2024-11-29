import IRessource from "./IRessource";
class CozyCatCoin implements IRessource {
  amount: number;
  desc: string;
  setAmount: (amount: number) => void;
  setDesc: (newDesc: string) => void;

  constructor(amount: number, desc: string) {
    this.amount = amount;
    this.desc = desc;

    this.setAmount = (amount: number) => {
      this.amount = amount;
    };
    this.setDesc = (newDesc: string) => {
      this.desc = newDesc;
    };
    // TODO
  }
}

export default CozyCatCoin;
