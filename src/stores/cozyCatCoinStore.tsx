import { create } from "zustand";

type Store = {
  coin: number
  desc: string
  setCoin: (amount: number) => void
  setDesc: (newDesc: string) => void
}

const useCozyCatCoinStore = create<Store>()((set) => ({
  coin: 1,
  setCoin: (amount: number) => set({coin: amount}),
  desc: "Default text no description defined",
  setDesc: (newDesc: string) => set({desc: newDesc})
}))

export default useCozyCatCoinStore