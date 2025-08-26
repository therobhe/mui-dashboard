import { createTheme } from "@mui/material";

/**
 * Theme used to create own variable values through the entire palette
 * you must use <ThemeProvider theme={customMaterialUITheme}> and wrap your entire App with it in order to work
 */
export const customMatierialUITHeme = createTheme({
	palette: {
		primary: {
			main: "#1760a5",
			light: "skyblue"
		},
		secondary: {
			main: "#15c630",
			light: "#00BCD4",
		}
	}
});