import { create } from "zustand";
import User from "../models/User";

const useUserStore = create<User>();

export default useUserStore;
