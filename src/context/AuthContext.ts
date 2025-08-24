import { createContext } from "react";

/**
 * Type definition for the authentication context.
 *
 * @typedef {Object} AuthContextType
 * @property {boolean} isLoggedIn - Indicates whether the user is logged in.
 * @property {() => void} login - Function to log the user in.
 * @property {() => void} logout - Function to log the user out.
 */
type AuthContextType = {
	isLoggedIn: boolean;
	login: () => void;
	logout: () => void;
}

/**
 * React context for managing authentication state.
 *
 * This context provides the `isLoggedIn` state and methods for logging in and out.
 *
 * Components consuming this context should be wrapped in an `AuthProvider` to ensure
 * proper functionality.
 *
 * @type {React.Context<AuthContextType>}
 */
export const AuthContext = createContext<AuthContextType>(
	{
		isLoggedIn: false,
		login: () => {
		},
		logout: () => {
		}
	}
);