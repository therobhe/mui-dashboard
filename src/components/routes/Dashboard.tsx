import { useAuth } from "../../hooks/useAuth.ts";
import { Sidebar } from "../ui/dashboard/Sidebar.tsx";
import { AccessDenied } from "./AccessDenied.tsx";
import { Rightbar } from "../ui/dashboard/Rightbar.tsx";
import { Box, Stack } from "@mui/material";
import { Feed } from "../ui/dashboard/Feed.tsx";

export function Dashboard() {
	const { isLoggedIn } = useAuth();
	
	if (!isLoggedIn) {
		return <AccessDenied />;
	}
	
	return (
		<Box>
			<Stack direction="row" justifyContent={"space-between"}>
				<Sidebar></Sidebar>
				<Feed></Feed>
				<Rightbar></Rightbar>
			</Stack>
		</Box>
	);
}