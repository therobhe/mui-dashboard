import { useRedirectIfLoggedIn } from "../hooks/useRedirect.ts"

/**
 * login form with Formik and Yup to mock a "boundary" before accessing the dashboard
 * TODO: implement the Formik form and Yup schema validation for the Inputs "username" and "password"
 * TODO: store the login data in the localStorage
 *
 * @returns JSX.Element - Login page component
 */
export function Login() {
	useRedirectIfLoggedIn("/dashboard")
	
	return (
		<div>
			<h2>Login Page</h2>
		</div>
	);
}