import IRessource from "../IRessource";
class Fish implements IRessource {
  amount: number;
  name: string = "Fish";
  desc: string =
    "Fish is a ressource that can be used to feed your cat. It can be obtained by fishing... The fish is a very good source of protein and omega 3. It is also very tasty.";
  ressourceType: string = "Food";
  setAmount: (amount: number) => void;

  constructor(amount: number) {
    this.amount = amount;

    this.setAmount = (amount: number) => {
      this.amount = amount;
    };
  }
}

export default Fish;
