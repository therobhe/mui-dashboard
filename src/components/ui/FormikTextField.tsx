import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import { useField } from "formik";

type FormikTextFieldProps = TextFieldProps & {
	name: string,
	label: string
}

export function FormikTextField({ name, label, ...props }: FormikTextFieldProps) {
	const [nameField, nameFieldMeta] = useField(name);
	
	return (
		<TextField
			{...props}
			{...nameField}
			id={name}
			name={name}
			type="text"
			label={label || ( name[0].toUpperCase() + name.slice(1) )}
			error={Boolean(nameFieldMeta.touched && nameFieldMeta.error)}
			helperText={nameFieldMeta.touched && nameFieldMeta.error ? nameFieldMeta.error : ""}
		/>
	)
}