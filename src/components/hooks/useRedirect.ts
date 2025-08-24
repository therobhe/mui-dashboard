import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

/**
 * Custom hook to handle redirection for logged-in users.
 *
 * This hook checks if the user is logged in (either via context or `localStorage`),
 * and if so, redirects them to the specified path. It also provides a `checking` state
 * to indicate whether the redirection check is still in progress.
 *
 * @param {string} [redirectPath="/dashboard"] - The path to redirect to if the user is logged in.
 * @returns {boolean} - A boolean indicating whether the redirection check is still in progress.
 */
export function useRedirectIfLoggedIn(redirectPath: string = "/dashboard") {
	const { isLoggedIn } = useAuth(); // Retrieves the login state from the authentication context.
	const navigate = useNavigate(); // Provides navigation functionality.
	const [checking, setChecking] = useState(true); // Tracks whether the redirection check is ongoing.
	
	useEffect(() => {
		// Check if the user is logged in via `localStorage` or context.
		const localStorageLoggedIn = localStorage.getItem("isLoggedIn") === "true";
		if (isLoggedIn || localStorageLoggedIn) {
			// Redirect to the specified path if the user is logged in.
			navigate(redirectPath, { replace: true });
		} else {
			// Mark the check as complete if the user is not logged in.
			setChecking(false);
		}
	}, [isLoggedIn, navigate, redirectPath]); // Dependencies for the effect.
	
	return checking; // Return the `checking` state to indicate if the check is still in progress.
}