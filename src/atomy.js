import { atom } from "recoil";

export const triggered = atom({
  key: "trigger", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
