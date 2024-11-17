import { create } from "zustand";

type Store = {
  farmState: boolean
  farmDesc: string
  setFarmState: (newState: boolean) => void
  setfarmDesc: (newDesc: string) => void
}

const useBuildingsStore = create<Store>()((set) => ({
  farmState: false,
  farmDesc: "Default text no description defined",
  setfarmDesc: (newDesc: string) => set({farmDesc: newDesc}),
  setFarmState: (newState: boolean) => set({farmState: newState})
}))

export default useBuildingsStore