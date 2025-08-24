import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteWrapper } from "./components/routes/RouteWrapper.tsx";
import { Login } from './components/routes/Login.tsx';
import { Dashboard } from './components/routes/Dashboard.tsx';
import { ErrorPage } from './components/routes/Error.tsx';
import { AuthProvider } from "./context/AuthProvider.tsx";

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
])

function App() {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	)
}

export default App
