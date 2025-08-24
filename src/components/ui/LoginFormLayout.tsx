import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

type LoginFromLayoutProps = {
	children: React.ReactNode
}

export function LoginFormLayout({ children }: LoginFromLayoutProps) {
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
								minHeight: 300
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
	)
}