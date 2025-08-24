import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export function useRedirectIfLoggedIn(redirectPath: string = "/dashboard") {
	const { isLoggedIn } = useAuth();
	const navigate = useNavigate();
	const [checking, setChecking] = useState(true);
	
	useEffect(() => {
		const localStorageLoggedIn = localStorage.getItem("isLoggedIn") === "true";
		if (isLoggedIn || localStorageLoggedIn) {
			navigate(redirectPath, { replace: true });
		} else {
			setChecking(false);
		}
	}, [isLoggedIn, navigate, redirectPath]);
	
	return checking;
}