import type { ReactNode } from "react";
import { useState } from "react";
import { ThemeModeContext } from "./ThemeModeContext.ts";

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setMode] = useState<"light" | "dark">("light");
	const toggleMode = () => setMode((prev) => ( prev === "light" ? "dark" : "light" ));
	return (
		<ThemeModeContext.Provider value={{ mode, toggleMode }}>
			{children}
		</ThemeModeContext.Provider>
	);
};
