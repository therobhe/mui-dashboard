import { HeaderNavigation } from "../Navigation/HeaderNavigation";
import { Link } from "react-router-dom";

export function ErrorPage() {
	return (
		<>
			<HeaderNavigation/>
			<main>
				<h1>An error occured</h1>
				<p>This page does not exist</p>
				<Link to="..">Back to Login</Link>
			</main>
		</>
	);
}
