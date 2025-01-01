import { create } from "zustand";
import User from "../models/User";

const useUserStore = create<User>()((set) => ({
  id: 0,
  ressourceList: {},
  buildingsList: {},
  getUser: () => set,
}));

export default useUserStore;
