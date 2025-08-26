import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React, { type JSX } from "react";

/**
 * Props for the `LoginFormLayout` component.
 *
 * @property {React.ReactNode} children - The child components to be rendered inside the layout.
 */
type LoginFromLayoutProps = {
	children: React.ReactNode
}

/**
 * A layout component for the login form.
 *
 * This component provides a styled layout for a login form, including a centered card
 * with a title and space for child components. It uses Material-UI components for styling.
 *
 * @param {LoginFromLayoutProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the layout.
 *
 * @returns {JSX.Element} The rendered `LoginFormLayout` component.
 */
export function LoginFormLayout({ children }: LoginFromLayoutProps): JSX.Element {
	return (
		<Box sx={{ marginTop: 4 }}>
			<Container maxWidth={"sm"}>
				<Grid container spacing={2}>
					<Grid size={{ xs: 12 }}>
						<Card
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								minHeight: 300,
								marginTop: "4rem"
							}}
						>
							<CardContent>
								<Typography variant="h2" gutterBottom
								            sx={{ color: 'text.secondary', fontSize: "32px", fontWeight: "bold" }}>
									Login
								</Typography>
								{children}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}