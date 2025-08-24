import { useAuth } from "../hooks/useAuth.ts";

/**
 * login form with Formik and Yup to mock a "boundary" before accessing the dashboard
 * TODO: implement the Formik form and Yup schema validation for the Inputs "username" and "password"
 *
 * @returns JSX.Element - Login page component
 */
export function Login() {
	const { isLoggedIn } = useAuth();
	
	console.log("Current login state from context: ", isLoggedIn);
	
	return (
		<div>
			<h2>Login Page</h2>
		</div>
	);
}