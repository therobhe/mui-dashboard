import { Box, Stack } from "@mui/material";
import { FeedPost } from "./FeedPost.tsx";

export function Feed() {
	return (
		<Box flex={4} p={2}>
			<Stack direction="column" spacing={1}>
				<FeedPost postFromUser={"T"} postTitle={"Beautiful Scenery in Bavaria"}
				          postText={"While travelling bavaria, you will encounter many beautiful sights like this one."}
				          hasImage={true} />
				
				<FeedPost postFromUser={"M"} postTitle={"How many FE developers does it take to change a light bulb?"}
				          postText={"1 lol"}
				          hasImage={false} />
				
				<FeedPost postFromUser={"R"} postTitle={"Are there still any facebook users?"}
				          postText={"I mean, this app here is way cooler!"}
				          hasImage={false} />
			</Stack>
		</Box>
	);
}