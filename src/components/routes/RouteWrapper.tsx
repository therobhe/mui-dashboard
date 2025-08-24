import { Outlet } from "react-router-dom";
import { HeaderNavigation } from "../Navigation/HeaderNavigation";

export function RouteWrapper() {
    return (
        <>
            <HeaderNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}