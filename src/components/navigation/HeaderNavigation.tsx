import styles from './HeaderNavigation.module.css';
import { useAuth } from "../../hooks/useAuth.ts";

export function HeaderNavigation() {
	const { isLoggedIn } = useAuth();
	
	return (
		<header className={styles.header}>
			<h2 className={styles.h2}>RobNet</h2>
			{isLoggedIn && (
				<nav>
					<div>Searchbar</div>
					<div>Icons</div>
				</nav>
			)}
		</header>
	);
}