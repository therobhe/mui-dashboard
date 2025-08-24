import { useRedirectIfLoggedIn } from "../hooks/useRedirect.ts";
import { LoginForm } from "../ui/LoginForm.tsx";

/**
 * login form with Formik and Yup to mock a "boundary" before accessing the dashboard
 *
 * @returns JSX.Element - Login page component
 */
export function Login() {
	const checking = useRedirectIfLoggedIn("/dashboard");
	
	if (checking) return null;
	
	return (
		<LoginForm />
	);
}