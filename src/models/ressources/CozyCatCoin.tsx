import IRessource from "../IRessource";
class CozyCatCoin implements IRessource {
  amount: number;
  name: string = "CCC";
  desc: string =
    "CozyCatCoin is the main currency for our cat villagers. It can be used to buy buildings and other stuff sutch as food!";
  setAmount: (amount: number) => void;

  constructor(amount: number) {
    this.amount = amount;

    this.setAmount = (amount: number) => {
      this.amount = amount;
    };
  }
}

export default CozyCatCoin;
