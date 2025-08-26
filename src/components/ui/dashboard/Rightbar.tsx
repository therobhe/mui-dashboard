import { Box } from "@mui/material";
import { OnlineFriends } from "./OnlineFriends.tsx";
import { LatestPhotos } from "./LatestPhotos.tsx";
import { LatestConversations } from "./LatestConversations.tsx";

export function Rightbar() {
	return (
		<Box flex={1} p={2} sx={{
			display: { xs: "none", sm: "block" }
		}}>
			<Box position={"fixed"} sx={{ marginTop: "4rem", marginRight: "1rem" }}>
				<OnlineFriends />
				<LatestPhotos />
				<LatestConversations />
			</Box>
		</Box>
	);
}