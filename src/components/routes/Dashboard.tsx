import { useAuth } from "../hooks/useAuth.ts";
import { AccessDenied } from "./AccessDenied.tsx";

export function Dashboard() {
	const { isLoggedIn } = useAuth();

	if (!isLoggedIn) {
		return <AccessDenied />;
	}

	return (
		<div>
			<h2>Dashboard Page</h2>
		</div>
	);
}