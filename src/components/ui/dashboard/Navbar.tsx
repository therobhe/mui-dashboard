import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Typography } from "@mui/material";
import { IconContainer, StyledSearch, StyledToolbar, UserBox } from "../StyledComponents.ts";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import { useState } from "react";

const AVATAR_IMG = "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	
	return (
		<AppBar position="fixed">
			<StyledToolbar>
				<Typography variant={"h6"} sx={{ display: { xs: "none", sm: "block" } }}>
					RobNet
				</Typography>
				<Pets sx={{ display: { xs: "block", sm: "none" } }} />
				<StyledSearch>
					<InputBase placeholder="search..." />
				</StyledSearch>
				<IconContainer>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={1} color="error">
						<Notifications />
					</Badge>
					<Avatar onClick={() => setIsMenuOpen(true)}
					        src={AVATAR_IMG} />
				</IconContainer>
				<UserBox onClick={() => setIsMenuOpen(true)}>
					<Avatar src={AVATAR_IMG} />
					<Typography>John</Typography>
				</UserBox>
			</StyledToolbar>
			
			<Menu open={isMenuOpen}
			      onClose={() => setIsMenuOpen(false)}
			      id="avatar-menu"
			      aria-labelledby="Avatar Menu"
			      anchorOrigin={{
				      vertical: "top",
				      horizontal: "right",
			      }}
			      transformOrigin={{
				      vertical: "top",
				      horizontal: "right",
			      }}
			>
				<MenuItem>My Account</MenuItem> {/*Click on this should toggle a modal with your username and pw */}
				<MenuItem>Logout</MenuItem> {/*Click on this should trigger logout from useAuth()*/}
			</Menu>
		</AppBar>
	);
}