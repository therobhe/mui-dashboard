import { Box, styled, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between"
});

export const StyledSearch = styled("div")(({ theme }) => ( {
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%"
} ));

export const IconContainer = styled(Box)(({ theme }) => ( {
	display: "none",
	gap: "20px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	}
} ));

export const UserBox = styled(Box)(({ theme }) => ( {
	display: "flex",
	gap: "10px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	}
} ));
