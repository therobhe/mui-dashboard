import { Button, CardActions, Grid } from "@mui/material";
import { useAuth } from "../hooks/useAuth.ts";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormikTextField } from "./FormikTextField.tsx";
import { LoginFormLayout } from "./LoginFormLayout.tsx";

type FormValues<T> = {
	username: T,
	password: T,
	confirmPassword: T
}

const initialFormValues: FormValues<string> = {
	username: "",
	password: "",
	confirmPassword: ""
}

const validationSchema = Yup.object().shape({
	username: Yup.string().min(3).required("Username is required"),
	password: Yup.string().min(6).required("Password is required"),
	confirmPassword: Yup.string()
	.oneOf([Yup.ref("password")], "Passwords must match")
	.required("Confirm is required")
})


export function LoginForm() {
	const { login } = useAuth();
	
	return (
		<LoginFormLayout>
			<Formik initialValues={initialFormValues}
			        onSubmit={(values) => {
				        console.log(values);
				        login();
			        }}
			        validationSchema={validationSchema}>
				<Form>
					<Grid container spacing={4} sx={{ marginBottom: "2rem" }}>
						<Grid size={{ xs: 12 }}>
							<FormikTextField name="username" variant="standard" fullWidth />
						</Grid>
						
						<Grid size={{ xs: 6 }}>
							<FormikTextField name="password" variant="standard" fullWidth />
						</Grid>
						
						<Grid size={{ xs: 6 }}>
							<FormikTextField name="confirmPassword" label="Confirm Password" variant="standard"
							                 fullWidth />
						</Grid>
					</Grid>
					<CardActions sx={{ display: "flex", justifyContent: "end" }}>
						<Button type="submit" variant="contained">Login</Button>
					</CardActions>
				</Form>
			</Formik>
		</LoginFormLayout>
	)
}