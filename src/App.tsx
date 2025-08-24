import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteWrapper } from "./components/routes/RouteWrapper.tsx";
import { Login } from './components/routes/Login.tsx';
import { Dashboard } from './components/routes/Dashboard.tsx';
import { ErrorPage } from './components/routes/Error.tsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <RouteWrapper/>,
		errorElement: <ErrorPage/>,
		children: [
			{
				index: true,
				element: <Login/>
			},
			{
				path: "/dashboard",
				element: <Dashboard/>
			}
		]
	}
])

function App() {
	return <RouterProvider router={router}/>
}

export default App
