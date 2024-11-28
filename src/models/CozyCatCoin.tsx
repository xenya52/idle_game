import IRessource from "./IRessource";
class CozyCatCoin extends IRessource {
  amount: number
  desc: string
  setAmount(amount: number) => boolean
  setDesc: (newDesc: string) => boolean

  constructor(amount: number, desc: string) {
    super()
    this.amount = amount
    this.desc = desc
    // TODO
  }
}

export default CozyCatCoin;
