import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Typography } from "@mui/material";
import { IconContainer, StyledSearch, StyledToolbar, UserBox } from "../StyledComponents.ts";
import { ConnectWithoutContact, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth.ts";
import { useNavigate } from "react-router-dom";

const AVATAR_IMG = "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const { logout } = useAuth();
	const navigate = useNavigate();
	
	return (
		<AppBar position="fixed">
			<StyledToolbar>
				<Box onClick={() => navigate("/")}
				     sx={{ cursor: "pointer" }}>
					<Typography variant={"h6"} sx={{ display: { xs: "none", sm: "block" } }}>
						RobNet
					</Typography>
					<ConnectWithoutContact sx={{ display: { xs: "block", sm: "none" } }} />
				</Box>
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
				<MenuItem onClick={() => {
					logout();
					navigate("/");
				}}>Logout</MenuItem> {/*Click on this should trigger logout from useAuth()*/}
			</Menu>
		</AppBar>
	);
}