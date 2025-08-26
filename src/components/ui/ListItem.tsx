import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

type SidebarListItemProps = {
	component?: string,
	icon: React.ReactNode,
	title: string,
	href?: string
}

export function SidebarListItem({ component = "a", icon, title, href = "/dashboard" }: SidebarListItemProps) {
	return (
		<ListItem disablePadding>
			<ListItemButton component={component} href={href}>
				<ListItemIcon>
					{icon}
				</ListItemIcon>
				<ListItemText primary={title}></ListItemText>
			</ListItemButton>
		</ListItem>
	);
}