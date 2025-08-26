import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography
} from "@mui/material";
import { useMemo } from "react";


function getRandomColor() {
	const colors = ["red", "blue", "green", "teal", "pink", "brown"];
	return colors[Math.floor(Math.random() * colors.length)];
}

type FeedPostProps = {
	postFromUser: string,
	postTitle: string,
	postText: string,
	hasImage: boolean
}

export function FeedPost({ postFromUser, postTitle, postText, hasImage }: FeedPostProps) {
	const avatarColor = useMemo(() => getRandomColor(), []);
	
	return (
		<Card>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: avatarColor }}>
						{postFromUser}
					</Avatar>
				}
				title={postTitle}
				subheader="August 12, 2025"
			/>
			{hasImage && (
				<CardMedia
					component="img"
					image="https://www.naturparkbergischesland.de/fileadmin/_processed_/a/b/csm_Naturregion__c__Naturregion_Sieg__Sedlmeier_712fe660cc.png"
					alt="Beautiful scenery"
				/>
			)}
			<CardContent>
				<Typography variant="body2" sx={{ color: 'text.secondary' }}>
					{postText}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label={"add to favs"}>
					<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
				</IconButton>
				<IconButton aria-label={"share with a contact"}>
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
}