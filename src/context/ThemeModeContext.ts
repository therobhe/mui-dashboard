import { createContext } from "react";

type ThemeModeContextProps = {
	mode: "light" | "dark";
	toggleMode: () => void;
}

export const ThemeModeContext = createContext<ThemeModeContextProps | undefined>(undefined);