import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.ts";

/**
 * Custom hook to access the authentication context.
 *
 * This hook provides access to the `AuthContext`, which contains the authentication state
 * and methods for managing login and logout functionality. It must be used within a component
 * that is wrapped by the `AuthProvider`, as the `AuthContext` must be available in the component tree.
 *
 * @throws {Error} If the hook is used outside of the `AuthProvider`.
 * @returns {AuthContextType} The authentication context value, including `isLoggedIn`, `login`, and `logout`.
 */
export const useAuth = () => {
	return useContext(AuthContext);
};