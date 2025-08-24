import { Link } from "react-router-dom";

export function AccessDenied() {
	return (
		<div>
			<h2>Access denied!</h2>
			<p>Please login before trying to access this page!</p>
			<Link to="..">Back to Login</Link>
		</div>
	)
}