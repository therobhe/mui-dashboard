import { useAuth } from "../hooks/useAuth.ts";
import { AccessDenied } from "./AccessDenied.tsx";

export function Dashboard() {
	const { isLoggedIn } = useAuth();
	console.log("isLoggedIn in Dashboard", isLoggedIn);
	
	if (!isLoggedIn) {
		return <AccessDenied />;
	}
	
	return (
		<div>
			<h2>Dashboard Page</h2>
		</div>
	);
}