import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteWrapper } from "./components/routes/RouteWrapper.tsx";
import { Login } from './components/routes/Login.tsx';
import { Dashboard } from './components/routes/Dashboard.tsx';
import { ErrorPage } from './components/routes/Error.tsx';
import { AuthProvider } from "./context/AuthProvider.tsx";
import { ThemeModeProvider } from "./context/ThemeModeProvider.tsx";
import { Box, IconButton, ThemeProvider } from "@mui/material";
import { getAppTheme } from "./themes/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeMode } from "./hooks/useThemeMode.ts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RouteWrapper />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Login />
			},
			{
				path: "/dashboard",
				element: <Dashboard />
			}
		]
	}
]);

function AppContent() {
	const { mode, toggleMode } = useThemeMode();
	const theme = getAppTheme(mode);
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
				<IconButton
					sx={{ position: 'fixed', top: 16, right: 16 }}
					color="inherit"
					onClick={toggleMode}
					aria-label="toggle theme"
				>
					{mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
				</IconButton>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
			</Box>
		</ThemeProvider>
	);
}

export default function App() {
	return (
		<ThemeModeProvider>
			<AppContent />
		</ThemeModeProvider>
	);
}
