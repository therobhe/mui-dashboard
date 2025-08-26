import { Button, CardActions, Grid } from "@mui/material";
import { useAuth } from "../../../hooks/useAuth.ts";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormikTextField } from "./FormikTextField.tsx";
import { LoginFormLayout } from "./LoginFormLayout.tsx";
import type { JSX } from "react";

/**
 * Type definition for the form values used in the login form.
 * @template T - The type of the form values.
 */
type FormValues<T> = {
	username: T;
	password: T;
	confirmPassword: T;
};

/**
 * Initial values for the login form fields.
 */
const initialFormValues: FormValues<string> = {
	username: "",
	password: "",
	confirmPassword: ""
};

/**
 * Validation schema for the login form using Yup.
 * - `username` must be at least 3 characters long and is required.
 * - `password` must be at least 6 characters long and is required.
 * - `confirmPassword` must match the `password` field and is required.
 */
const validationSchema = Yup.object().shape({
	username: Yup.string().min(3).required("Username is required"),
	password: Yup.string().min(6).required("Password is required"),
	confirmPassword: Yup.string()
	.oneOf([Yup.ref("password")], "Passwords must match")
	.required("Confirm is required")
});

/**
 * LoginForm component.
 *
 * This component renders a login form with fields for username, password, and confirm password.
 * It uses Formik for form state management and validation.
 * On form submission, the form values are saved to `localStorage`, and the `login` function from the
 * authentication context is called.
 *
 * @returns {JSX.Element} The rendered login form component.
 */
export function LoginForm(): JSX.Element {
	const { login } = useAuth(); // Retrieves the login function from the authentication context.
	
	return (
		<LoginFormLayout>
			<Formik
				initialValues={initialFormValues} // Sets the initial form values.
				onSubmit={(values) => {
					// Saves the form values to localStorage and calls the login function.
					localStorage.setItem("loginFormValues", JSON.stringify(values));
					login();
				}}
				validationSchema={validationSchema} // Applies the validation schema.
			>
				<Form>
					<Grid container spacing={4} sx={{ marginBottom: "2rem" }}>
						{/* Username field */}
						<Grid size={{ xs: 12 }}>
							<FormikTextField name="username" label="Username" variant="standard" fullWidth />
						</Grid>
						
						{/* Password field */}
						<Grid size={{ xs: 6 }}>
							<FormikTextField name="password" label="Password" variant="standard" fullWidth />
						</Grid>
						
						{/* Confirm password field */}
						<Grid size={{ xs: 6 }}>
							<FormikTextField
								name="confirmPassword"
								label="Confirm Password"
								variant="standard"
								fullWidth
							/>
						</Grid>
					</Grid>
					{/* Submit button */}
					<CardActions sx={{ display: "flex", justifyContent: "end" }}>
						<Button type="submit" variant="contained">Login</Button>
					</CardActions>
				</Form>
			</Formik>
		</LoginFormLayout>
	);
}