import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.ts";

export function Dashboard() {
	// TODO: useAuth() to detect login state - prevent access to page before that
	const { isLoggedIn } = useAuth()
	
	if (!isLoggedIn) {
		return (
			<div>
				<h2>Access denied!</h2>
				<p>Please login before trying to access this page!</p>
				<Link to="..">Back to Login</Link>
			</div>
		)
	}
	
	return (
		<div>
			<h2>Dashboard Page</h2>
		</div>
	);
}