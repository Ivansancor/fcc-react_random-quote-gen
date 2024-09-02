import { create } from "zustand";
import { type Color } from "./../types/types";

const COLORS = [
  "red",
  "pink",
  "purple",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "lime",
  "orange",
  "brown",
  "grey",
];

export const useColorStore = create<Color>((set) => ({
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
  setColor: () =>
    set({ color: COLORS[Math.floor(Math.random() * COLORS.length)] }),
}));
