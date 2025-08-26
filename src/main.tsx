import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
/*import { ThemeProvider } from "@mui/material";*/
/*import { customMatierialUITHeme } from "./themes/theme.ts";*/

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{/*		<ThemeProvider theme={customMatierialUITHeme}>*/}
		<App />
		{/*		</ThemeProvider>*/}
	</StrictMode>,
);
