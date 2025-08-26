import { Button, styled } from "@mui/material";

// Creating a Custom Component in Material UI happens with styled(MATERIAL_UI_COMPONENT)({STYLE_OBJECT})
export const BlueButton = styled(Button)({
	backgroundColor: "navy",
	color: '888',
	margin: 5,
	"&:hover": {
		backgroundColor: "lightblue",
	},
	"&:disabled": {
		backgroundColor: "gray",
		color: "white",
	}
});

// In order to use the values from the theme and override them, you must use {theme} in an arrow function
/*
const GreenButton = styled(Button)((customMatierialUITHeme) => {
	backgroundColor: customMatierialUITHeme.palette.primary.main;
});*/
