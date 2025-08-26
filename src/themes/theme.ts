import { createTheme } from "@mui/material";

export const getAppTheme = (mode: "light" | "dark") =>
	createTheme({
		palette: {
			mode,
			primary: {
				main: "#1760a5",
				light: "#42a5f5",
				dark: "#003c6c",
				contrastText: "#fff"
			},
			secondary: {
				main: "#15c630",
				light: "#5efc82",
				dark: "#008b1e",
				contrastText: "#fff"
			},
			background: {
				default: mode === "light" ? "#f5f5f5" : "#121212",
				paper: mode === "light" ? "#fff" : "#1e1e1e"
			},
			text: {
				primary: mode === "light" ? "#111" : "#fff",
				secondary: mode === "light" ? "#333" : "#ccc"
			}
		}
	});
