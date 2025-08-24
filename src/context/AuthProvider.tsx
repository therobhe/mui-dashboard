import React from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext.ts";

type AuthProviderProps = {
	children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loginFn = () => {
		console.log("LOGGIN IN");
		setIsLoggedIn(true);
	}
	const logoutFn = () => {
		console.log("LOGGING OUT");
		setIsLoggedIn(false);
	}
	
	const authCtx = {
		isLoggedIn: isLoggedIn,
		login: loginFn,
		logout: logoutFn,
	}
	return (
		<AuthContext.Provider value={authCtx}>
			{children}
		</AuthContext.Provider>
	);
}