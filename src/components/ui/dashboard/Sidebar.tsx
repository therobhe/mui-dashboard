import { Group, Home, ModeNight, Pages, Person, PersonSearch, Settings } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch } from "@mui/material";
import { SidebarListItem } from "../ListItem.tsx";
import { useThemeMode } from "../../../hooks/useThemeMode.ts";


export function Sidebar() {
	const { mode, toggleMode } = useThemeMode();
	return (
		<Box flex={1} p={2} sx={{
			display: { xs: "none", sm: "block" },
		}}>
			<Box position={"fixed"}>
				<List>
					<SidebarListItem component="a" title="Home" icon={<Home />} />
					<SidebarListItem component="a" title="Pages" icon={<Pages />} />
					<SidebarListItem component="a" title="Groups" icon={<Group />} />
					<SidebarListItem component="a" title="Friends" icon={<PersonSearch />} />
					<SidebarListItem component="a" title="Settings" icon={<Settings />} />
					<SidebarListItem component="a" title="Profile" icon={<Person />} />
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch checked={mode === 'dark'} onChange={toggleMode} />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
}