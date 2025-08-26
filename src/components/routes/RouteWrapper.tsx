import { Outlet, useLocation } from "react-router-dom";
import { HeaderNavigation } from "../navigation/HeaderNavigation.tsx";
import { AnimatePresence, motion } from "framer-motion";

export function RouteWrapper() {
	const location = useLocation();
	
	return (
		<>
			<HeaderNavigation />
			<main>
				<AnimatePresence mode="wait">
					<motion.div
						key={location.pathname}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.4 }}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
			</main>
		</>
	);
}