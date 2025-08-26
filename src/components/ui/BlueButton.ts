import { Button, styled } from "@mui/material";

export const BlueButton = styled(Button)(({ theme }) => ( {
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	margin: 5,
	"&:hover": {
		backgroundColor: theme.palette.primary.light,
	},
	"&:disabled": {
		backgroundColor: theme.palette.action.disabled,
		color: theme.palette.action.disabledBackground,
	}
} ));
