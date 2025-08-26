import { Box } from "@mui/material";

export function Sidebar() {
	return (
		<Box bgcolor={"orange"} flex={1} p={2} sx={{
			display: { xs: "none", sm: "block" },
		}}>
			Sidebar
		</Box>
	);
}