import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

/**
 * Redirects to the specified path if the user is logged in.
 * @param {string} redirectPath - The path to redirect to if logged in.
 */
export function useRedirectIfLoggedIn(redirectPath: string = "/dashboard") {
	const { isLoggedIn } = useAuth();
	const navigate = useNavigate();
	
	useEffect(() => {
		if (isLoggedIn) {
			navigate(redirectPath);
		}
	}, [isLoggedIn, navigate, redirectPath]);
}