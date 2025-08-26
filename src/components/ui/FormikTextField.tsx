import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import { useField } from "formik";

/**
 * Props for the `FormikTextField` component.
 *
 * @typedef {TextFieldProps} FormikTextFieldProps
 * @property {string} name - The name of the field, used to connect with Formik's state.
 * @property {string} label - The label for the text field. Defaults to a capitalized version of the `name` if not provided.
 */
type FormikTextFieldProps = TextFieldProps & {
	name: string,
	label: string
}

/**
 * A wrapper around MUI's `TextField` component that integrates with Formik.
 *
 * This component connects a Material-UI `TextField` to Formik's form state,
 * automatically handling value, error, and touched state.
 *
 * @param name
 * @param label
 * @param {FormikTextFieldProps} props - The props for the component.
 * @returns {JSX.Element} The rendered `TextField` component.
 */
export function FormikTextField({ name, label, ...props }: FormikTextFieldProps): JSX.Element {
	const [nameField, nameFieldMeta] = useField(name); // Connects the field to Formik's state.
	
	return (
		<TextField
			{...props} // Passes additional props to the TextField.
			{...nameField} // Binds Formik's field state (value, onChange, onBlur).
			id={name} // Sets the id of the field.
			name={name} // Sets the name of the field.
			type="text" // Sets the input type to text.
			label={label || ( name[0].toUpperCase() + name.slice(1) )} // Uses the provided label or defaults to a capitalized name.
			error={Boolean(nameFieldMeta.touched && nameFieldMeta.error)} // Displays an error if the field is touched and has an error.
			helperText={nameFieldMeta.touched && nameFieldMeta.error ? nameFieldMeta.error : ""} // Shows the error message if applicable.
		/>
	);
}