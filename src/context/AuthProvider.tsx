import React, { useState } from "react";
import { AuthContext } from "./AuthContext.ts";

type AuthProviderProps = {
	children: React.ReactNode;
}

/**
 * The `AuthProvider` component is responsible for managing and providing authentication state
 * to the component tree. It uses React's Context API to share the `isLoggedIn` state and
 * authentication methods (`login` and `logout`) with any component that consumes the `AuthContext`.
 *
 * @param {AuthProviderProps} props - The props for the `AuthProvider` component.
 * @param {React.ReactNode} props.children - The child components that will have access to the authentication context.
 * @returns {JSX.Element} The `AuthProvider` component wrapping its children with the `AuthContext.Provider`.
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");
	
	/**
	 * Logs the user in by setting the `isLoggedIn` state to `true`.
	 * Also logs a message to the console for debugging purposes.
	 */
	const loginFn = () => {
		console.log("LOGGING IN");
		setIsLoggedIn(true);
		localStorage.setItem("isLoggedIn", "true");
	};
	
	/**
	 * Logs the user out by setting the `isLoggedIn` state to `false`.
	 * Also logs a message to the console for debugging purposes.
	 */
	const logoutFn = () => {
		console.log("LOGGING OUT");
		setIsLoggedIn(false);
		localStorage.setItem("isLoggedIn", "false");
	};
	
	// The authentication context value containing the current login state and authentication methods.
	const authCtx = {
		isLoggedIn: isLoggedIn,
		login: loginFn,
		logout: logoutFn,
	};
	
	return (
		<AuthContext.Provider value={authCtx}>
			{children}
		</AuthContext.Provider>
	);
};