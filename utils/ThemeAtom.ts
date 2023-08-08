import { atomWithStorage } from "jotai/utils";

// Set the string key and the initial value

const ThemeAtom = atomWithStorage("darkMode", false);

export default ThemeAtom;
